import { Request, Response } from 'express';
import * as reelService from '../services/reel.service';
import { CreatePostDto } from '../types/post.types';

export const uploadReel = async (req: Request, res: Response) => {
    try {
        const reelData: CreatePostDto = req.body;
        const videoFile = req.file as Express.Multer.File;

        if (!videoFile) {
            return res.status(400).json({ error: 'File video là bắt buộc' });
        }

        const newReel = await reelService.uploadReelVideo({
            reelData,
            videoFile,
        });

        res.status(201).json(newReel);
    } catch (error) {
        console.error('Lỗi khi upload reel:', error);

        if (error instanceof Error) {
            if (error.message.includes('Không có tệp video nào được cung cấp')) {
                return res.status(400).json({ error: 'File video là bắt buộc' });
            }

            if (error.message.includes('Không tải được video')) {
                return res.status(500).json({ error: 'Lỗi khi tải video lên' });
            }
        }
        res.status(500).json({ error: 'Không thể upload reel' });
    }
};
