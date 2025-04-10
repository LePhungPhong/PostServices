import { Request, Response } from "express";
import * as getPostService from "../services/getPostAndView.service";



export const getAllPostsByUserId = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const page = parseInt(req.query.page as string) || 1;
        const postType = req.query.postType as string | undefined;
        const viewerId = (req as any).user?.sub;

        if (!viewerId) {
            return res.status(401).json({ message: 'Vui lòng đăng nhập' });
        }

        const result = await getPostService.getAllPostsByUserId(userId, page, viewerId, postType);

        return res.status(200).json({
            message: 'Lấy danh sách bài viết thành công',
            status: 'success',
            data: result,
        });
    } catch (error) {
        console.error('Lỗi lấy danh sách bài viết:', error);
        return res.status(500).json({ message: 'Không thể lấy danh sách bài viết' });
    }
};

export const getPostById = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;
        const viewerId = (req as any).user?.sub;

        if (!viewerId) {
            return res.status(401).json({ message: 'Vui lòng đăng nhập' });
        }

        const post = await getPostService.getPostById(postId, viewerId);

        res.status(200).json({
            message: 'Lấy bài viết thành công',
            status: 'success',
            data: post,
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message || 'Đã xảy ra lỗi' });
    }
};

export const getPostByIdController = async (req: Request, res: Response) => {
    try {
        const postId = req.params.postId;
        const viewerId = (req as any).user?.sub;

        if (!viewerId) {
            return res.status(401).json({ message: 'Vui lòng đăng nhập' });
        }

        const result = await getPostService.getPostById(postId, viewerId);

        if (result === 'forbidden') {
            return res.status(403).json({ message: 'Bạn không có quyền xem bài viết này' });
        }

        if (!result) {
            return res.status(404).json({ message: 'Không tìm thấy bài viết' });
        }

        return res.status(200).json({
            message: 'Lấy bài viết thành công',
            status: 'success',
            data: result,
        });
    } catch (error) {
        console.error('Lỗi lấy bài viết:', error);
        return res.status(500).json({ message: 'Không thể lấy bài viết' });
    }
};

export const handleRecordPostView = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;
        const viewerId = (req as any).user?.sub;
        const view = await getPostService.recordPostView(postId, viewerId);
        res.status(200).json({ message: "View recorded", data: view });
    } catch (error) {
        res.status(500).json({ message: "Error recording view", error });
    }
};

export const handleCountPostViews = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;

        const count = await getPostService.countPostViews(postId);
        res.status(200).json({ postId, views: count });
    } catch (error) {
        res.status(500).json({ message: "Error getting view count", error });
    }
};

export const handleGetPostViewers = async (req: Request, res: Response) => {
    try {
        const { postId } = req.params;

        const viewers = await getPostService.getPostViewers(postId);
        res.status(200).json({ postId, viewers });
    } catch (error) {
        res.status(500).json({ message: "Error getting viewers", error });
    }
};
