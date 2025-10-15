import { prisma } from "../config/database";
import { Prisma } from "../generated/prisma";
import { CreatePostDto } from "../types/post.types";
import { v4 as uuidv4 } from "uuid";

export const createStory = async ({
  storyData,
  mediaUrl,
}: {
  storyData: CreatePostDto;
  mediaUrl: string;
}) => {
  const {
    user_id,
    title,
    content,
    visibility = "public",
    hashtags = [],
    tagged_friends = [],
  } = storyData;
  console.log("📦 Dữ liệu parse:", { user_id, title, content, visibility });
  console.log("📦 Dữ liệu mediaUrl:", mediaUrl);
  if (!mediaUrl) {
    throw new Error("Không có tệp video nào được cung cấp");
  }
  return await prisma.$transaction(async (tx) => {
    const newStory = await tx.posts.create({
      data: {
        id: uuidv4(),
        title,
        content,
        visibility,
        userId: user_id,
        postType: "story",
        expired_at: new Date(Date.now() + 24 * 60 * 60 * 1000),
      },
    });
    await tx.media.create({
      data: {
        id: uuidv4(),
        mediaUrl: mediaUrl,
        mediaType: "image",
        postId: newStory.id,
      },
    });

    for (const tagName of hashtags) {
      let hashtag = await tx.hashtag.findUnique({ where: { name: tagName } });
      if (!hashtag) {
        hashtag = await tx.hashtag.create({
          data: { id: uuidv4(), name: tagName },
        });
      }
      await tx.postHashtags.create({
        data: {
          postId: newStory.id,
          hashtagId: hashtag.id,
        },
      });
    }

    for (const friendId of tagged_friends) {
      await tx.postTagFriend.create({
        data: {
          id: uuidv4(),
          postId: newStory.id,
          userId: friendId,
          taggedBy: user_id,
        },
      });
    }

    return {
      ...newStory,
      mediaUrl,
    };
  });
};

export const getStoryById = async (storyId: string) => {
  const story = await prisma.posts.findUnique({
    where: { id: storyId },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
          avatarUrl: true,
        },
      },
      media: {
        select: {
          mediaUrl: true,
          mediaType: true,
        },
      },
    },
  });

  if (!story) {
    throw new Error("Không tìm thấy story");
  }

  const hashtags = await prisma.hashtag.findMany({
    select: { name: true },
    where: {
      posts: {
        some: { postId: storyId },
      },
    },
  });

  const taggedFriends = await prisma.users.findMany({
    select: {
      id: true,
      username: true,
      fullname: true,
      avatarUrl: true,
    },
    where: {
      taggedInPosts: {
        some: { postId: storyId },
      },
    },
  });
  return {
    ...story,
    hashtags: hashtags.map((hashtag) => hashtag.name),
    tagged_friends: taggedFriends,
    mediaUrls: story.media.map((media) => media.mediaUrl),
  };
};
export const deleteStory = async (storyId: string) => {
  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    await tx.comments.deleteMany({ where: { postId: storyId } });
    await tx.postHashtags.deleteMany({ where: { postId: storyId } });
    await tx.postTagFriend.deleteMany({ where: { postId: storyId } });
    await tx.media.deleteMany({ where: { postId: storyId } });
    return tx.posts.delete({ where: { id: storyId } });
  });
};
