// Import thư viện và các kiểu dữ liệu cần thiết
import { prisma } from "../config/database"; // Prisma instance để thao tác với database
import { Prisma, MediaTypeEnum } from "../generated/prisma";
import { CreatePostDto, UpdatePostDto } from "../types/post.types"; // Kiểu dữ liệu cho việc tạo/cập nhật bài viết
import { v4 as uuidv4 } from "uuid"; // Tạo UUID cho các bản ghi

// Hàm tạo bài viết mới
export const createPost = async (postData: CreatePostDto) => {
  const {
    user_id,
    title,
    content,
    visibility = "public",
    hashtags = [],
    tagged_friends = [],
    mediaUrls = [],
  } = postData;
  console.log("createPost", postData);

  // Thực hiện các thao tác trong một transaction
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

    // Tạo media nếu có
    if (mediaUrls.length > 0) {
      const mediaData = mediaUrls.map((mediaUrl) => ({
        id: uuidv4(),
        postId: newPost.id,
        mediaUrl,
        mediaType: MediaTypeEnum.image || MediaTypeEnum.video, // Lỗi logic: nên xác định đúng loại media
      }));
      await tx.media.createMany({ data: mediaData });
    }

    // Tạo hashtags nếu có
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

    // Gắn thẻ bạn bè nếu có
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

// Hàm cập nhật bài viết
export const updatePost = async (postId: string, postData: UpdatePostDto) => {
  const { title, content, visibility, hashtags, tagged_friends } = postData;

  // Kiểm tra bài viết có tồn tại không
  const existingPost = await prisma.posts.findUnique({ where: { id: postId } });
  if (!existingPost) throw new Error("Không tìm thấy bài viết");

  // Thực hiện cập nhật trong transaction
  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // Cập nhật dữ liệu bài viết
    await tx.posts.update({
      where: { id: postId },
      data: {
        title: title ?? undefined,
        content: content ?? undefined,
        visibility: visibility ?? undefined,
        updatedAt: new Date(),
      },
    });

    // Cập nhật hashtags
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

    // Cập nhật danh sách bạn bè được tag
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

// Hàm xoá bài viết
export const deletePost = async (postId: string) => {
  const existingPost = await prisma.posts.findUnique({ where: { id: postId } });
  if (!existingPost) throw new Error("Không tìm thấy bài viết");

  return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // Xoá liên kết với hashtags, bạn bè được tag, media, lượt thích
    await tx.postHashtags.deleteMany({ where: { postId } });
    await tx.postTagFriend.deleteMany({ where: { postId } });
    await tx.media.deleteMany({ where: { postId } });
    await tx.likes.deleteMany({ where: { postId } });

    // Xoá bình luận con trước khi xoá bình luận cha
    const comments = await tx.comments.findMany({ where: { postId } });
    for (const comment of comments) {
      await tx.comments.deleteMany({ where: { parentId: comment.id } });
    }
    await tx.comments.deleteMany({ where: { postId } });

    // Xoá lượt chia sẻ và khỏi newsfeed
    await tx.shares.deleteMany({ where: { postId } });
    await tx.newsFeed.deleteMany({ where: { postId } });

    // Xoá bài viết cuối cùng
    return await tx.posts.delete({ where: { id: postId } });
  });
};

// Hàm lấy bài viết theo ID kèm thông tin user, media, hashtags, tagged friends
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
