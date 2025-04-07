import { prisma } from '../config/database';
import { CreatePostDto, UpdatePostDto } from '../types/post.types';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';
import { MediaTypeEnum } from '@prisma/client';
// Tạo bài viết mới
export const createPost = async (postData: CreatePostDto) => {
  const { user_id, title, content, visibility = 'public', hashtags = [], tagged_friends = [] } = postData;

  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // Tạo bài viết mới
    const newPost = await tx.posts.create({
      data: {
        id: uuidv4(),
        title,
        content,
        visibility,
        userId: user_id,
      },
    });
    // Hàm nhận diện mediaType dựa trên phần mở rộng file
    const detectMediaType = (url: string): MediaTypeEnum => {
      const extension = url.split('.').pop()?.toLowerCase();
      switch (extension) {
        case 'jpg':
        case 'jpeg':
        case 'png':
        case 'gif':
          return MediaTypeEnum.image; // Trả về giá trị enum
        case 'mp4':
        case 'mov':
        case 'avi':
          return MediaTypeEnum.video;
        default:
          return console.error(`Không thể nhận diện định dạng: ${extension}`), MediaTypeEnum.file;
          ;
      }
    };
    // Xử lý media
    if (postData.mediaUrls) {
      for (const mediaUrl of postData.mediaUrls) {
        const mediaType = detectMediaType(mediaUrl);
        await tx.media.create({
          data: {
            id: uuidv4(),
            postId: newPost.id,
            mediaUrl: mediaUrl,
            mediaType: mediaType,
          },
        });
      }
    }
    // Xử lý hashtags
    for (const tagName of hashtags) {
      let hashtag = await tx.hashtag.findUnique({ where: { name: tagName } });
      if (!hashtag) {
        hashtag = await tx.hashtag.create({
          data: {
            id: uuidv4(),
            name: tagName,
          },
        });
      }

      await tx.postHashtags.create({
        data: {
          postId: newPost.id,
          hashtagId: hashtag.id,
        },
      });
    }

    // Xử lý bạn bè được tag
    for (const friendId of tagged_friends) {
      await tx.postTagFriend.create({
        data: {
          id: uuidv4(),
          postId: newPost.id,
          userId: friendId,
          taggedBy: user_id,
        },
      });
    }



    return newPost;
  });
};

// Cập nhật bài viết
export const updatePost = async (postId: string, postData: UpdatePostDto) => {
  const { title, content, visibility, hashtags, tagged_friends } = postData;

  const existingPost = await prisma.posts.findUnique({ where: { id: postId } });
  if (!existingPost) {
    throw new Error('Không tìm thấy bài viết');
  }

  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // Cập nhật thông tin bài viết
    await tx.posts.update({
      where: { id: postId },
      data: {
        title: title ?? undefined,
        content: content ?? undefined,
        visibility: visibility ?? undefined,
        updatedAt: new Date(),
      },
    });

    // Xử lý hashtags
    if (hashtags) {
      await tx.postHashtags.deleteMany({ where: { postId: postId } });

      for (const tagName of hashtags) {
        let hashtag = await tx.hashtag.findUnique({ where: { name: tagName } });
        if (!hashtag) {
          hashtag = await tx.hashtag.create({
            data: {
              id: uuidv4(),
              name: tagName,
            },
          });
        }

        await tx.postHashtags.create({
          data: {
            postId: postId,
            hashtagId: hashtag.id,
          },
        });
      }
    }

    // Xử lý bạn bè được tag
    if (tagged_friends) {
      await tx.postTagFriend.deleteMany({ where: { postId: postId } });

      for (const friendId of tagged_friends) {
        await tx.postTagFriend.create({
          data: {
            id: uuidv4(),
            postId: postId,
            userId: friendId,
            taggedBy: existingPost.userId,
          },
        });
      }
    }

    return getPostById(postId);
  });
};

// Xóa bài viết
export const deletePost = async (postId: string) => {
  const existingPost = await prisma.posts.findUnique({ where: { id: postId } });
  if (!existingPost) {
    throw new Error('Không tìm thấy bài viết');
  }

  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.postHashtags.deleteMany({ where: { postId: postId } });
    await tx.postTagFriend.deleteMany({ where: { postId: postId } });
    await tx.media.deleteMany({ where: { postId: postId } });
    await tx.likes.deleteMany({ where: { postId: postId } });

    const comments = await tx.comments.findMany({ where: { postId: postId } });
    for (const comment of comments) {
      await tx.comments.deleteMany({ where: { parentId: comment.id } });
    }
    await tx.comments.deleteMany({ where: { postId: postId } });

    await tx.shares.deleteMany({ where: { postId: postId } });
    await tx.newsFeed.deleteMany({ where: { postId: postId } });
    await tx.notifications.deleteMany({ where: { postId: postId } });

    return await tx.posts.delete({ where: { id: postId } });
  });
};

// Lấy bài viết theo ID
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
        }
      },
      media: true,
    },
  });

  if (!post) {
    return null;
  }

  const hashtags = await prisma.hashtag.findMany({
    select: { name: true },
    where: {
      posts: {
        some: {
          postId: postId,
        },
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
        some: {
          postId: postId,
        },
      },
    },
  });

  return {
    ...post,
    hashtags: hashtags.map((h: { name: string }) => h.name),
    tagged_friends: taggedFriends,
  };
};

