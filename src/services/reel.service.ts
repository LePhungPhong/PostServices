import { prisma } from '../config/database';
import { CreatePostDto } from '../types/post.types';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';
import { MediaTypeEnum } from '@prisma/client';

export const uploadReelVideo = async ({ reelData, mediaUrls }: { reelData: CreatePostDto; mediaUrls: string }) => {
    const { user_id, title, content, visibility = 'public', hashtags = [], tagged_friends = [] } = reelData;

    if (!mediaUrls) {
        throw new Error('Không có tệp video nào được cung cấp');
    }

    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
        const newReel = await tx.posts.create({
            data: {
                id: uuidv4(),
                title,
                content,
                visibility,
                userId: user_id,
                postType: 'reel',
            },
        });

        await tx.media.create({
            data: {
                id: uuidv4(),
                mediaUrl: mediaUrls,
                mediaType: MediaTypeEnum.video,
                postId: newReel.id,
            },
        });

        // hashtags
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
                    postId: newReel.id,
                    hashtagId: hashtag.id,
                },
            });
        }

        // tagged friends
        for (const friendId of tagged_friends) {
            await tx.postTagFriend.create({
                data: {
                    id: uuidv4(),
                    postId: newReel.id,
                    userId: friendId,
                    taggedBy: user_id,
                },
            });
        }

        return {
            ...newReel,
            mediaUrls,
        };
    });
};



export const getReelById = async (reelId: string) => {
    const reel = await prisma.posts.findUnique({
        where: { id: reelId },
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

    if (!reel) {
        throw new Error('Không tìm thấy reel');
    }

    const hashtags = await prisma.hashtag.findMany({
        select: { name: true },
        where: {
            posts: {
                some: { postId: reelId },
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
                some: { postId: reelId },
            },
        },
    });

    return {
        ...reel,
        hashtags: hashtags.map((hashtag) => hashtag.name),
        tagged_friends: taggedFriends,
    };
};

export const deleteReel = async (reelId: string) => {
    return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
        await tx.comments.deleteMany({ where: { postId: reelId } });
        await tx.postHashtags.deleteMany({ where: { postId: reelId } });
        await tx.postTagFriend.deleteMany({ where: { postId: reelId } });
        await tx.media.deleteMany({ where: { postId: reelId } });
        await tx.notifications.deleteMany({ where: { postId: reelId } });
        return await tx.posts.delete({ where: { id: reelId } });
    });
};