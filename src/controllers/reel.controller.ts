import { Request, Response } from 'express';
import * as reelService from '../services/reel.service';
import { CreatePostDto } from '../types/post.types';

export const createReel = async (req: Request, res: Response) => {
    try {
        console.log('Request body:', req.body);

        let reelData = req.body.reelData;
        const mediaUrls = req.body.mediaUrls;

        if (typeof reelData === 'string') {
            try {
                reelData = JSON.parse(reelData);
            } catch (parseError) {
                return res.status(400).json({ message: 'Dữ liệu reelData không hợp lệ' });
            }
        }

        const newReel = await reelService.createReel({
            reelData,
            mediaUrls,
        });

        return res.status(200).json({ message: 'Tạo reel thành công', status: 'success', data: newReel });
    } catch (error: any) {
        console.error('Lỗi upload reel:', error);
        return res.status(500).json({ message: 'Không thể upload reel', error: error.message || error });
    }
};


export const getReelById = async (req: Request, res: Response) => {
    try {
        const reelId = req.params.id;
        const reel = await reelService.getReelById(reelId);

        if (!reel) {
            return res.status(404).json({ message: 'Không tìm thấy reel' });
        }

        res.json(reel);
    } catch (error) {
        res.status(500).json({ message: 'Không thể lấy thông tin reel' });
    }
}
export const deleteReel = async (req: Request, res: Response) => {
    try {
        const reelId = req.params.id;
        await reelService.deleteReel(reelId);
        res.status(200).json({
            message: 'Xóa reel thành công',
            status: 'success',
            data: null,
        });
    } catch (error) {
        console.error('Lỗi khi xóa reel:', error);
        if (error instanceof Error && error.message === 'Không tìm thấy reel') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Không thể xóa reel' });
    }
}
