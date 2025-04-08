import { Request, Response } from 'express';
import * as reelService from '../services/reel.service';
import { CreatePostDto } from '../types/post.types';

export const uploadReel = async (req: Request, res: Response) => {
    try {
        const reelData: CreatePostDto = req.body;
        const mediaUrls = req.body.mediaUrls as string[];

        if (!mediaUrls || mediaUrls.length === 0) {
            return res.status(400).json({ error: 'Cần ít nhất 1 video để đăng reel' });
        }
        const videoUrls = mediaUrls.filter(url => /\.(mp4|mov|webm|avi|mkv)$/i.test(url));

        if (videoUrls.length === 0) {
            return res.status(400).json({ error: 'File upload không phải video hợp lệ' });
        }

        if (videoUrls.length > 1) {
            return res.status(400).json({ error: 'Chỉ được đăng 1 video trong reel' });
        }

        const newReel = await reelService.uploadReelVideo({
            reelData,
            mediaUrls: videoUrls[0],
        });

        return res.status(201).json(newReel);
    } catch (error) {
        console.error('Lỗi khi upload reel:', error);
        return res.status(500).json({ error: 'Không thể upload reel' });
    }
};

export const getReelById = async (req: Request, res: Response) => {
    try {
        const reelId = req.params.id;
        const reel = await reelService.getReelById(reelId);

        if (!reel) {
            return res.status(404).json({ error: 'Không tìm thấy reel' });
        }

        res.json(reel);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin reel:', error);
        res.status(500).json({ error: 'Không thể lấy thông tin reel' });
    }
}
export const deleteReel = async (req: Request, res: Response) => {
    try {
        const reelId = req.params.id;
        await reelService.deleteReel(reelId);
        res.status(200).json({ message: 'Xóa reel thành công' });
    } catch (error) {
        console.error('Lỗi khi xóa reel:', error);
        if (error instanceof Error && error.message === 'Không tìm thấy reel') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: 'Không thể xóa reel' });
    }
}
