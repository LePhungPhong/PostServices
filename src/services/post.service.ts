import { prisma } from '../config/database';
import { CreatePostDto, UpdatePostDto } from '../types/post.types';
import { v4 as uuidv4 } from 'uuid';
import { Prisma, MediaTypeEnum } from '@prisma/client';
import { getUserById } from './test.service';



export const createPost = async (postData: CreatePostDto) => {
  const {
    user_id,
    title,
    content,
    visibility = 'public',
    hashtags = [],
    tagged_friends = [],
    mediaUrls = [],
  } = postData;

  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const newPost = await tx.posts.create({
      data: {
        id: uuidv4(),
        title,
        content,
        visibility,
        userId: user_id,
      },
    });

    if (mediaUrls.length > 0) {
      const mediaData = mediaUrls.map((mediaUrl) => ({
        id: uuidv4(),
        postId: newPost.id,
        mediaUrl,
        mediaType: MediaTypeEnum.image || MediaTypeEnum.video,
      }));

      await tx.media.createMany({ data: mediaData });
    }

    if (hashtags.length > 0) {
      for (const tagName of hashtags) {
        let hashtag = await tx.hashtag.findUnique({ where: { name: tagName } });
        if (!hashtag) {
          hashtag = await tx.hashtag.create({
            data: { id: uuidv4(), name: tagName },
          });
        }
        await tx.postHashtags.create({
          data: {
            postId: newPost.id,
            hashtagId: hashtag.id,
          },
        });
      }
    }

    if (tagged_friends.length > 0) {
      const tagFriendData = tagged_friends.map((friendId) => ({
        id: uuidv4(),
        postId: newPost.id,
        userId: friendId,
        taggedBy: user_id,
      }));

      await tx.postTagFriend.createMany({ data: tagFriendData });
    }

    return newPost;
  });
};

export const updatePost = async (postId: string, postData: UpdatePostDto) => {
  const { title, content, visibility, hashtags, tagged_friends } = postData;
  const existingPost = await prisma.posts.findUnique({ where: { id: postId } });
  if (!existingPost) throw new Error('Không tìm thấy bài viết');

  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.posts.update({
      where: { id: postId },
      data: {
        title: title ?? undefined,
        content: content ?? undefined,
        visibility: visibility ?? undefined,
        updatedAt: new Date(),
      },
    });

    if (hashtags) {
      await tx.postHashtags.deleteMany({ where: { postId } });
      for (const tagName of hashtags) {
        let hashtag = await tx.hashtag.findUnique({ where: { name: tagName } });
        if (!hashtag) {
          hashtag = await tx.hashtag.create({
            data: { id: uuidv4(), name: tagName },
          });
        }
        await tx.postHashtags.create({
          data: { postId, hashtagId: hashtag.id },
        });
      }
    }

    if (tagged_friends) {
      await tx.postTagFriend.deleteMany({ where: { postId } });
      const tagFriendData = tagged_friends.map((friendId) => ({
        id: uuidv4(),
        postId,
        userId: friendId,
        taggedBy: existingPost.userId,
      }));
      await tx.postTagFriend.createMany({ data: tagFriendData });
    }
  });
};

export const deletePost = async (postId: string) => {
  const existingPost = await prisma.posts.findUnique({ where: { id: postId } });
  if (!existingPost) throw new Error('Không tìm thấy bài viết');

  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.postHashtags.deleteMany({ where: { postId } });
    await tx.postTagFriend.deleteMany({ where: { postId } });
    await tx.media.deleteMany({ where: { postId } });
    await tx.likes.deleteMany({ where: { postId } });

    const comments = await tx.comments.findMany({ where: { postId } });
    for (const comment of comments) {
      await tx.comments.deleteMany({ where: { parentId: comment.id } });
    }
    await tx.comments.deleteMany({ where: { postId } });

    await tx.shares.deleteMany({ where: { postId } });
    await tx.newsFeed.deleteMany({ where: { postId } });
    await tx.notifications.deleteMany({ where: { postId } });

    return await tx.posts.delete({ where: { id: postId } });
  });
};

export const getPostById = async (postId: string): Promise<any> => {
  const post = await prisma.posts.findUnique({
    where: { id: postId },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
          avatarUrl: true,
        },
      },
      media: true,
    },
  });

  if (!post) return null;
  if (post.visibility === 'private') {

  }
  const hashtags = await prisma.hashtag.findMany({
    select: { name: true },
    where: {
      posts: {
        some: { postId },
      },
    },
  });

  const taggedFriends = await prisma.users.findMany({
    select: {
      id: true,
      username: true,
      fullname: true,
    },
    where: {
      taggedInPosts: {
        some: { postId },
      },
    },
  });

  return {
    ...post,
    hashtags: hashtags.map((h) => h.name),
    tagged_friends: taggedFriends,
  };
};

export const getAllPostsByUserId = async (userId: string, page: number) => {
  let limit=10;
  const posts = await prisma.posts.findMany({
    where: { userId },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
          avatarUrl: true,
        },
      },
      media: true,
    },
    orderBy: { createdAt: 'desc' },
    skip: (page - 1) * limit,
    take: limit,
  });

  const totalPosts = await prisma.posts.count({ where: { userId } });
  return { posts, totalPosts };
}