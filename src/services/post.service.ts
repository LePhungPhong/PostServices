// Import thư viện và các kiểu dữ liệu cần thiết
import { prisma } from "../config/database";
import { Prisma } from "../generated/prisma";
import { CreatePostDto, UpdatePostDto } from "../types/post.types";
import { v4 as uuidv4 } from "uuid";

// ===========================
// CREATE POST
// ===========================
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

  const postId = uuidv4();

  // 1️⃣ Tạo post + các quan hệ liên quan trong transaction
  const newPost = await prisma.$transaction(
    async (tx: Prisma.TransactionClient) => {
      // -------- POST --------
      const createdPost = await tx.posts.create({
        data: {
          id: postId,
          title,
          content,
          visibility,
          userId: user_id,
        },
      });

      // -------- MEDIA --------
      let createdMedia: { id: string; mediaUrl: string; mediaType: string }[] =
        [];
      if (mediaUrls.length > 0) {
        const mediaData = mediaUrls.map(({ mediaUrl, mediaType }) => ({
          id: uuidv4(),
          postId: createdPost.id,
          mediaUrl,
          mediaType,
        }));
        await tx.media.createMany({ data: mediaData });
        createdMedia = mediaData;
      }

      // -------- HASHTAGS --------
      if (hashtags.length > 0) {
        for (const tagName of hashtags) {
          let hashtag = await tx.hashtag.findUnique({
            where: { name: tagName },
          });
          if (!hashtag) {
            hashtag = await tx.hashtag.create({
              data: { id: uuidv4(), name: tagName },
            });
          }
          await tx.postHashtags.create({
            data: {
              postId: createdPost.id,
              hashtagId: hashtag.id,
            },
          });
        }
      }

      // -------- TAGGED FRIENDS --------
      if (tagged_friends.length > 0) {
        const tagFriendData = tagged_friends.map((friendId) => ({
          id: uuidv4(),
          postId: createdPost.id,
          userId: friendId,
          taggedBy: user_id,
        }));
        await tx.postTagFriend.createMany({ data: tagFriendData });
      }

      // ✅ Return post kèm media
      return {
        ...createdPost,
        media: createdMedia,
      };
    }
  );

  // 2) Lấy info user + hashtags để trả về & publish
  const [author, postHashtagLinks] = await Promise.all([
    prisma.users.findUnique({
      where: { id: user_id },
      select: {
        id: true,
        username: true,
        fullname: true,
        avatarUrl: true,
      },
    }),
    prisma.postHashtags.findMany({
      where: { postId },
      include: { hashtag: true },
    }),
  ]);

  const hashtagNames = postHashtagLinks.map((ph) => ph.hashtag.name);

  // 3) Trả ra đúng format controller mong đợi
  return {
    ...newPost,
    user: author || null,
    hashtags: hashtagNames,
  };
};

// ===========================
// UPDATE POST
// ===========================
export const updatePost = async (postId: string, postData: UpdatePostDto) => {
  const { title, content, visibility, hashtags, tagged_friends, mediaUrls } =
    postData;

  // Kiểm tra bài viết tồn tại
  const existingPost = await prisma.posts.findUnique({
    where: { id: postId },
  });
  if (!existingPost) throw new Error("Không tìm thấy bài viết");

  // 1️⃣ Update trong transaction
  await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // -------- POST --------
    await tx.posts.update({
      where: { id: postId },
      data: {
        title: title ?? undefined,
        content: content ?? undefined,
        visibility: visibility ?? undefined,
        updatedAt: new Date(),
      },
    });

    // -------- MEDIA (nếu client gửi mediaUrls thì replace toàn bộ) --------
    if (Array.isArray(mediaUrls)) {
      await tx.media.deleteMany({ where: { postId } });

      if (mediaUrls.length > 0) {
        const mediaData = mediaUrls.map(({ mediaUrl, mediaType }) => ({
          id: uuidv4(),
          postId,
          mediaUrl,
          mediaType,
        }));
        await tx.media.createMany({ data: mediaData });
      }
    }

    // -------- HASHTAGS --------
    if (Array.isArray(hashtags)) {
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

    // -------- TAGGED FRIENDS --------
    if (Array.isArray(tagged_friends)) {
      await tx.postTagFriend.deleteMany({ where: { postId } });

      if (tagged_friends.length > 0) {
        const tagFriendData = tagged_friends.map((friendId) => ({
          id: uuidv4(),
          postId,
          userId: friendId,
          taggedBy: existingPost.userId,
        }));
        await tx.postTagFriend.createMany({ data: tagFriendData });
      }
    }
  });

  // 2️⃣ Load lại post sau khi update (kèm user, media, hashtags)
  const [savedPost, author, postHashtagLinks] = await Promise.all([
    prisma.posts.findUnique({
      where: { id: postId },
      include: {
        media: true,
      },
    }),
    prisma.users.findUnique({
      where: { id: existingPost.userId },
      select: {
        id: true,
        username: true,
        fullname: true,
        avatarUrl: true,
      },
    }),
    prisma.postHashtags.findMany({
      where: { postId },
      include: { hashtag: true },
    }),
  ]);

  if (!savedPost) throw new Error("Không tìm thấy bài viết");

  const hashtagNames = postHashtagLinks.map((ph) => ph.hashtag.name);

  // 3️⃣ Trả format thống nhất với createPost
  return {
    ...savedPost,
    user: author || null,
    hashtags: hashtagNames,
    // tagged_friends nếu cần trả ra, có thể query tương tự như getPostById
  };
};

// ===========================
// DELETE POST
// ===========================
export const deletePost = async (postId: string) => {
  const existingPost = await prisma.posts.findUnique({ where: { id: postId } });
  if (!existingPost) throw new Error("Không tìm thấy bài viết");

  const deletedPost = await prisma.$transaction(
    async (tx: Prisma.TransactionClient) => {
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

      return await tx.posts.delete({ where: { id: postId } });
    }
  );

  return deletedPost;
};

// ===========================
// GET POST BY ID
// ===========================
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

  const [hashtags, taggedFriends] = await Promise.all([
    prisma.hashtag.findMany({
      select: { name: true },
      where: {
        posts: {
          some: { postId },
        },
      },
    }),
    prisma.users.findMany({
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
    }),
  ]);

  return {
    ...post,
    hashtags: hashtags.map((h) => h.name),
    tagged_friends: taggedFriends,
  };
};

// ===========================
// COUNT POSTS
// ===========================
export const getCountPost = async () => {
  const count = await prisma.posts.count();
  return count;
};

// ===========================
// WEEKLY POST ACTIVITY
// ===========================
export const getWeeklyPostActivity = async () => {
  const result = [];

  const days = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  const today = new Date();
  const currentWeekDay = today.getDay(); // 0 = CN, 1 = T2

  for (let i = 1; i <= 7; i++) {
    // Tính ngày tương ứng trong tuần
    // i = 1 → T2, i = 7 → CN
    const diff = i - currentWeekDay;
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + diff);

    const start = new Date(targetDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(targetDate);
    end.setHours(23, 59, 59, 999);

    const postsCount = await prisma.posts.count({
      where: {
        createdAt: {
          gte: start,
          lte: end,
        },
      },
    });

    result.push({
      day: days[i - 1],
      posts: postsCount,
    });
  }

  return result;
};

// ===========================
// RECENT POST ACTIVITIES
// ===========================
export const getRecentPostActivities = async () => {
  const recentPosts = await prisma.posts.findMany({
    orderBy: {
      createdAt: "desc",
    },
    take: 10,
    include: {
      user: {
        select: {
          id: true,
          username: true,
          fullname: true,
        },
      },
    },
  });

  return recentPosts.map((post) => ({
    type: "post_created",
    message: `${post.user?.fullname || post.user?.username} đã đăng bài mới`,
    postId: post.id,
    time: post.createdAt,
  }));
};
