import { Request, Response } from 'express';
import * as storyService from '../services/story.service';
import { CreatePostDto } from '../types/post.types';
import { error } from 'console';

export const createStory = async (req: Request, res: Response) => {
    try {

        let storyData: CreatePostDto = req.body.storyData;
        const mediaUrl = req.body.mediaUrl as string;
        const userId = (req as any).user?.sub;
        if (!userId) {
            return res.status(401).json({ message: 'Vui lòng đăng nhập' });
        }
        if (typeof storyData === 'string') {
            try {
                storyData = JSON.parse(storyData);
            } catch (parseError) {
                return res.status(400).json({ message: 'Dữ liệu storyData không hợp lệ' });
            }
        }
        const newstory = await storyService.createStory({
            storyData,
            mediaUrl: mediaUrl,
        });
        return res.status(201).json({ message: 'Tạo story thành công', status: 'success', data: newstory });
    } catch (error) {
        return res.status(500).json({ message: 'Không thể upload story' });
    }
};
export const getStoryById = async (req: Request, res: Response) => {
    try {
        const storyId = req.params.id;
        const userId = (req as any).user?.sub;
        if (!userId) {
            return res.status(401).json({ message: 'Vui lòng đăng nhập' });
        }
        const story = await storyService.getStoryById(storyId);

        if (!story) {
            return res.status(404).json({ message: 'Không tìm thấy story' });
        }

        res.json(story);
    } catch (error) {
        res.status(500).json({ message: 'Không thể lấy thông tin story' });
    }
}
export const deletestory = async (req: Request, res: Response) => {
    try {
        const storyId = req.params.id;
        const userId = (req as any).user?.sub;
        if (!userId) {
            return res.status(401).json({ message: 'Vui lòng đăng nhập' });
        }
        await storyService.deleteStory(storyId);
        res.status(200).json({ message: 'Xóa story thành công' });
    } catch (error) {

        if (error instanceof Error && error.message === 'Không tìm thấy story') {
            return res.status(404).json({ message: error.message });
        }
        res.status(500).json({ message: 'Không thể xóa story' });
    }
}
