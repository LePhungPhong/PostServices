import { prisma } from '../config/database';
import { v4 as uuidv4 } from 'uuid';
// LIKE
export const likePost = async (userId: string, postId: string) => {
  const post = await prisma.posts.findUnique({ where: { id: postId } });
  if (!post) throw new Error('Không tìm thấy bài viết');

  const existingLike = await prisma.likes.findUnique({
    where: {
      userId_postId: {
        userId,
        postId
      }
    }
  });

  if (existingLike) {
    await unlikePost(userId, postId);
    return { message: 'Đã bỏ thích bài viết trước đó' };
  }


  return await prisma.$transaction(async (tx) => {
    const like = await tx.likes.create({
      data: {
        id: uuidv4(),
        userId,
        postId
      },
      include: {
        user: {
          select: {
            username: true,

          }
        }
      }
    }
    )
    await tx.posts.update({
      where: { id: postId },
      data: { likeCount: { increment: 1 } }
    });
    return like;
  })
}

export const unlikePost = async (userId: string, postId: string) => {
  return await prisma.$transaction(async (tx) => {
    const like = await tx.likes.delete({
      where: {
        userId_postId: {
          userId,
          postId
        }
      }
    });
    await tx.posts.update({
      where: { id: postId },
      data: { likeCount: { decrement: 1 } }
    })
    return like;
  });
};
// COMMENT
export const createComment = async (userId: string, postId: string, content: string, parentId?: string) => {
  const post = await prisma.posts.findUnique({ where: { id: postId } });
  if (!post) throw new Error('Không tìm thấy bài viết');

  if (parentId) {
    const parentComment = await prisma.comments.findUnique({ where: { id: parentId } });
    if (!parentComment) throw new Error('Không tìm thấy bình luận cha');
  }

  return await prisma.$transaction(async (tx) => {
    await prisma.comments.create({
      data: {
        id: uuidv4(),
        postId,
        userId,
        content,
        parentId: parentId || null
      },
      include: {
        user: {
          select: {
            username: true,

          }
        }
      }
    });
    await tx.posts.update({
      where: { id: postId },
      data: { commentCount: { increment: 1 } }
    });
  })

};

export const deleteComment = async (commentId: string) => {
  const comment = await prisma.comments.findUnique({
    where: { id: commentId },
  });

  if (!comment) {
    throw new Error('Không tìm thấy bình luận');
  }

  return await prisma.$transaction(async (tx) => {
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
      where: { id: comment.postId },
      data: {
        commentCount: {
          decrement: totalToDelete,
        },
      },
    });

    return { deleted: true, totalDeleted: totalToDelete };
  });
};


// SHARE
export const sharePost = async (userId: string, postId: string) => {
  const post = await prisma.posts.findUnique({ where: { id: postId } });
  if (!post) throw new Error('Không tìm thấy bài viết');

  const existingShare = await prisma.shares.findFirst({
    where: {
      userId,
      postId
    }
  });

  if (existingShare) throw new Error('Bạn đã chia sẻ bài viết này rồi');

  const share = await prisma.$transaction([
    prisma.shares.create({
      data: {
        id: uuidv4(),
        postId,
        userId
      }
    }),
    prisma.posts.update({
      where: { id: postId },
      data: { shareCount: { increment: 1 } }
    })
  ]);

  return share[0];
};


export const getPostInteractions = async (postId: string) => {
  const [likes, comments, shares] = await Promise.all([
    prisma.likes.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            username: true,

          }
        }
      }
    }),
    prisma.comments.findMany({
      where: { postId, parentId: null }, // Chỉ lấy comment gốc
      include: {
        user: {
          select: {
            username: true,
            fullname: true,
            avatarUrl: true

          }
        },
        replies: {
          include: {
            user: {
              select: {
                username: true,

              }
            }
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    }),
    prisma.shares.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            username: true
          }
        }
      }
    })
  ]);

  return { likes, comments, shares };
};
