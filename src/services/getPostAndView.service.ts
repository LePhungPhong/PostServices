import { prisma } from '../config/database';
import { PostTypeEnum, Prisma } from '@prisma/client';
import axios from 'axios';

/**
 * Kiểm tra xem viewerId có phải bạn bè của userId hay không
 */
export const isFriendWithViewer = async (userId: string, viewerId: string): Promise<boolean> => {
    try {
        const response = await axios.post<{ isFriend: boolean }>(
            '/api/v1/follows/check-friend',
            { userId, viewerId }
        );
        return response.data.isFriend ?? false;
    } catch (error) {
        console.error('Lỗi khi gọi friend-service:', error);
        return false;
    }
};

/**
 * Lấy tất cả bài post của một user theo phân trang
 * - Nếu viewer là chủ bài post -> trả toàn bộ bài
 * - Nếu viewer là người khác -> chỉ trả bài public/friends hoặc có gắn thẻ viewer
 * - Có lọc theo postType nếu được truyền vào
 */
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

    let visibilityFilter: Prisma.PostsWhereInput = {};

    if (!isOwner) {
        const isFriend = await isFriendWithViewer(userId, viewerId);

        visibilityFilter = {
            OR: [
                { visibility: 'public' },
                isFriend ? { visibility: 'friends' } : undefined,
                {
                    taggedFriends: {
                        some: { userId: viewerId },
                    },
                },
            ].filter(Boolean) as Prisma.PostsWhereInput[],
        };
    }

    const whereClause: Prisma.PostsWhereInput = {
        userId,
        ...(postTypeFilter && { postType: postTypeFilter }),
        ...visibilityFilter,
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

/**
 * Lấy chi tiết bài post theo postId
 * - Bao gồm: thông tin user, media, hashtag, tagged friends
 * - Nếu viewer không phải chủ bài viết và visibility khác public -> trả "forbidden"
 */
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

/**
 * Ghi nhận lượt xem bài post của user
 * - Nếu đã từng xem rồi thì không thêm mới
 */
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

/**
 * Đếm tổng số lượt xem của bài post
 */
export const countPostViews = async (postId: string) => {
    return await prisma.viewer.count({
        where: { postId }
    });
};

/**
 * Lấy danh sách những user đã xem bài post
 * - Sắp xếp theo thời gian xem mới nhất
 */
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
