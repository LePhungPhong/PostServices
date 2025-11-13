import { prisma } from "../config/database";
import { v4 as uuidv4 } from "uuid";
import { publish } from "../config/nats";

// Helper: publish số liệu tương tác mới nhất cho SearchService (Elasticsearch)
const publishEngagement = async (postId: string) => {
  try {
    const post = await prisma.posts.findUnique({
      where: { id: postId },
      select: {
        likeCount: true,
        commentCount: true,
        shareCount: true,
      },
    });

    if (!post) return;

    await publish("post.engagement", {
      id: postId,
      like_count: post.likeCount ?? 0,
      comment_count: post.commentCount ?? 0,
      share_count: post.shareCount ?? 0,
    });
  } catch (err) {
    console.error("[publishEngagement] error:", err);
    // Không throw để tránh làm hỏng flow user
  }
};

// ====================== LIKE ======================
export const likePost = async (userId: string, postId: string) => {
  const post = await prisma.posts.findUnique({ where: { id: postId } });
  if (!post) throw new Error("Không tìm thấy bài viết");

  const existingLike = await prisma.likes.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  // Nếu đã like rồi → toggle thành unlike
  if (existingLike) {
    await prisma.$transaction(async (tx) => {
      await tx.likes.delete({
        where: {
          userId_postId: { userId, postId },
        },
      });
      await tx.posts.update({
        where: { id: postId },
        data: { likeCount: { decrement: 1 } },
      });
    });

    await publishEngagement(postId);

    return { message: "Đã bỏ thích bài viết trước đó" };
  }

  // Like mới
  const like = await prisma.$transaction(async (tx) => {
    const created = await tx.likes.create({
      data: {
        id: uuidv4(),
        userId,
        postId,
      },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    });

    await tx.posts.update({
      where: { id: postId },
      data: { likeCount: { increment: 1 } },
    });

    return created;
  });

  await publishEngagement(postId);

  return like;
};

export const unlikePost = async (userId: string, postId: string) => {
  // Dùng khi bạn muốn endpoint "unlike" tách riêng, không toggle
  await prisma.$transaction(async (tx) => {
    await tx.likes.delete({
      where: {
        userId_postId: {
          userId,
          postId,
        },
      },
    });

    await tx.posts.update({
      where: { id: postId },
      data: { likeCount: { decrement: 1 } },
    });
  });

  await publishEngagement(postId);
};

// ====================== COMMENT ======================
export const createComment = async (
  userId: string,
  postId: string,
  content: string,
  parentId?: string
) => {
  const post = await prisma.posts.findUnique({ where: { id: postId } });
  if (!post) throw new Error("Không tìm thấy bài viết");

  if (parentId) {
    const parentComment = await prisma.comments.findUnique({
      where: { id: parentId },
    });
    if (!parentComment) throw new Error("Không tìm thấy bình luận cha");
  }

  const comment = await prisma.$transaction(async (tx) => {
    const created = await tx.comments.create({
      data: {
        id: uuidv4(),
        postId,
        userId,
        content,
        parentId: parentId || null,
      },
      include: {
        user: {
          select: {
            username: true,
            fullname: true,
            avatarUrl: true,
          },
        },
      },
    });

    await tx.posts.update({
      where: { id: postId },
      data: { commentCount: { increment: 1 } },
    });

    return created;
  });

  await publishEngagement(postId);

  return comment;
};

export const deleteComment = async (commentId: string) => {
  const comment = await prisma.comments.findUnique({
    where: { id: commentId },
  });

  if (!comment) {
    throw new Error("Không tìm thấy bình luận");
  }

  const { postId } = comment;

  const result = await prisma.$transaction(async (tx) => {
    const replies = await tx.comments.findMany({
      where: { parentId: commentId },
      select: { id: true },
    });

    const totalToDelete = replies.length + 1;

    if (replies.length > 0) {
      await tx.comments.deleteMany({
        where: { parentId: commentId },
      });
    }

    await tx.comments.delete({
      where: { id: commentId },
    });

    await tx.posts.update({
      where: { id: postId },
      data: {
        commentCount: {
          decrement: totalToDelete,
        },
      },
    });

    return { deleted: true, totalDeleted: totalToDelete, postId };
  });

  await publishEngagement(postId);

  return result;
};

// ====================== SHARE ======================
export const sharePost = async (userId: string, postId: string) => {
  const post = await prisma.posts.findUnique({ where: { id: postId } });
  if (!post) throw new Error("Không tìm thấy bài viết");

  const existingShare = await prisma.shares.findFirst({
    where: {
      userId,
      postId,
    },
  });

  if (existingShare) {
    throw new Error("Bạn đã chia sẻ bài viết này rồi");
  }

  const [share] = await prisma.$transaction([
    prisma.shares.create({
      data: {
        id: uuidv4(),
        postId,
        userId,
      },
    }),
    prisma.posts.update({
      where: { id: postId },
      data: { shareCount: { increment: 1 } },
    }),
  ]);

  await publishEngagement(postId);

  return share;
};

// ====================== GET INTERACTIONS (chi tiết) ======================
export const getPostInteractions = async (postId: string) => {
  const [likes, comments, shares] = await Promise.all([
    prisma.likes.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    }),
    prisma.comments.findMany({
      where: { postId, parentId: null },
      include: {
        user: {
          select: {
            username: true,
            fullname: true,
            avatarUrl: true,
          },
        },
        replies: {
          include: {
            user: {
              select: {
                username: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.shares.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            username: true,
          },
        },
      },
    }),
  ]);

  return { likes, comments, shares };
};
