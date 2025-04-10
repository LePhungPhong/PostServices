import { prisma } from '../config/database';
import { PostTypeEnum, Prisma } from '@prisma/client';


export const getAllPostsByUserId = async (
    userId: string,
    page: number,
    viewerId: string,
    postType?: string
) => {
    const isOwner = userId === viewerId;
    const isValidPostType = Object.values(PostTypeEnum).includes(postType as PostTypeEnum);
    const postTypeFilter = isValidPostType ? (postType as PostTypeEnum) : undefined;
    const limit = postTypeFilter === 'reel' || postTypeFilter === 'story' ? 1 : 10;
    const skip = (page - 1) * limit;
    const whereClause: Prisma.PostsWhereInput = {
        userId,
        ...(postTypeFilter && { postType: postTypeFilter }),
        ...(isOwner
            ? {}
            : {
                OR: [
                    { visibility: 'public' },
                    {
                        taggedFriends: {
                            some: {
                                userId: viewerId,
                            },
                        },
                    },
                ],
            }),
    };

    const [posts, totalPosts] = await Promise.all([
        prisma.posts.findMany({
            where: whereClause,
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
            skip,
            take: limit,
        }),
        prisma.posts.count({ where: whereClause }),
    ]);

    return { posts, totalPosts };
};



export const getPostById = async (postId: string, viewerId: string) => {
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
            media: {
                select: {
                    mediaUrl: true,
                    mediaType: true,
                },
            },
        },
    });

    if (!post) {
        throw new Error("Không tìm thấy bài viết");
    }

    const isOwner = viewerId === post.userId;
    if (!isOwner && post.visibility !== "public") {
        return "forbidden";
    }

    const hashtagsResult = await prisma.hashtag.findMany({
        select: { name: true },
        where: {
            posts: {
                some: { postId },
            },
        },
    });

    const taggedFriendsResult = await prisma.users.findMany({
        select: {
            id: true,
            username: true,
            fullname: true,
            avatarUrl: true,
        },
        where: {
            taggedInPosts: {
                some: { postId },
            },
        },
    });

    return {
        ...post,
        hashtags: hashtagsResult.map((h) => h.name),
        tagged_friends: taggedFriendsResult,
        mediaUrls: post.media.map((m) => m.mediaUrl),
    };
};


export const recordPostView = async (postId: string, userId: string) => {
    const existing = await prisma.viewer.findUnique({
        where: {
            userId_postId: {
                userId,
                postId,
            },
        },
    });

    if (!existing) {
        return await prisma.viewer.create({
            data: {
                userId,
                postId,
                viewedAt: new Date(),
            },
        });
    }

    return existing;
};


export const countPostViews = async (postId: string) => {
    return await prisma.viewer.count({
        where: { postId }
    });
};

export const getPostViewers = async (postId: string) => {
    return await prisma.viewer.findMany({
        where: { postId },
        include: {
            user: {
                select: {
                    id: true,
                    fullname: true,
                    avatarUrl: true
                }
            }
        },
        orderBy: {
            viewedAt: 'desc'
        }
    });
};
