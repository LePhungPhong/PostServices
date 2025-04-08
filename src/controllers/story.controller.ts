import { Request, Response } from 'express';
import * as storyService from '../services/story.service';
import { CreatePostDto } from '../types/post.types';

export const createStory = async (req: Request, res: Response) => {
    try {
        const storyData: CreatePostDto = req.body;
        const mediaUrl = req.body.mediaUrl as string[];

        const videoUrls = mediaUrl.filter(url => /\.(mp4|mov|webm|avi|mkv)$/i.test(url));
        const imageUrls = mediaUrl.filter(url => /\.(jpg|jpeg|png|gif)$/i.test(url));
        if (videoUrls.length === 0 && imageUrls.length === 0) {
            return res.status(400).json({ error: 'File upload không hợp lệ' });
        }

        if (videoUrls.length > 1) {
            return res.status(400).json({ error: 'Chỉ được đăng 1 video trong story' });
        }

        const newstory = await storyService.createStory({
            storyData,
            mediaUrl: videoUrls[0],
        });

        return res.status(201).json(newstory);
    } catch (error) {
        console.error('Lỗi khi upload story:', error);
        return res.status(500).json({ error: 'Không thể upload story' });
    }
};

export const getStoryById = async (req: Request, res: Response) => {
    try {
        const storyId = req.params.id;
        const story = await storyService.getStoryById(storyId);

        if (!story) {
            return res.status(404).json({ error: 'Không tìm thấy story' });
        }

        res.json(story);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin story:', error);
        res.status(500).json({ error: 'Không thể lấy thông tin story' });
    }
}
export const deletestory = async (req: Request, res: Response) => {
    try {
        const storyId = req.params.id;
        await storyService.deleteStory(storyId);
        res.status(200).json({ message: 'Xóa story thành công' });
    } catch (error) {
        console.error('Lỗi khi xóa story:', error);
        if (error instanceof Error && error.message === 'Không tìm thấy story') {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: 'Không thể xóa story' });
    }
}
