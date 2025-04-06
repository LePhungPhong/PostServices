import { prisma } from '../config/database';
import { CreatePostDto } from '../types/post.types';
import { v4 as uuidv4 } from 'uuid';
import { Prisma } from '@prisma/client';
import { MediaTypeEnum } from '@prisma/client';

interface VideoUploadData {
    reelData: CreatePostDto;
    videoFile: Express.Multer.File;
}

export const uploadReelVideo = async ({ reelData, videoFile }: VideoUploadData) => {
    const { user_id, title, content, visibility = 'public', hashtags = [], tagged_friends = [] } = reelData;

    if (!videoFile) {
        throw new Error('Không có tệp video nào được cung cấp');
    }

    try {
        return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
            const videoUrl = `/uploads/${videoFile.filename}`;
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
                    mediaUrl: videoUrl,
                    mediaType: MediaTypeEnum.video,
                    postId: newReel.id,
                },
            });
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
                videoUrl,
            };
        });
    } catch (error) {
        throw new Error(`Không tải được video: ${error}`);
    }
};
