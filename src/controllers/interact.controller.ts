
import { Request, Response } from 'express';
import * as interactService from '../services/interact.service';
import { error } from 'console';

export const likePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.user_id;
    if (!userId) {
      return res.status(400).json({ message: 'Vui lòng đăng nhập' });
    }
    const like = await interactService.likePost(userId, postId);
    if ('message' in like) {
      res.status(200).json({ message: like.message, status: 'success', data: null });
    } else {
      res.status(201).json({ message: 'Thích bài viết thành công', status: 'success', data: null });
    }
  } catch (message) {
    res.status(500).json({ message: 'Không thể thích bài viết' });
  }
};
export const unlikePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Vui lòng đăng nhập' });
    }


    await interactService.unlikePost(userId, postId);
    res.status(200).json({ message: 'Bỏ thích thành công', status: 'success', data: null });
  } catch (err) {

    res.status(500).json({ message: 'Không thể bỏ thích bài viết' });
  }
};

// COMMENT 
export const createComment = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const { content, parent_id } = req.body;
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Vui lòng đăng nhập' });
    }


    const comment = await interactService.createComment(userId, postId, content, parent_id);
    res.status(200).json({ message: 'Tạo bình luận thành công', status: 'success', data: comment });
  } catch (error) {

    res.status(500).json({ message: 'Không thể tạo bình luận' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Vui lòng đăng nhập' });
    }


    await interactService.deleteComment(commentId);

    res.status(200).json({ message: 'Xóa bình luận thành công', status: 'success', data: null });
  } catch (error) {
    if (error instanceof Error && error.message === 'Không tìm thấy bình luận') {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: 'Không thể xóa bình luận' });
  }
}


// SHARE 
export const sharePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const { user_id } = req.body;

    const userId = (req as any).user?.id;
    if (!userId) {
      return res.status(401).json({ message: 'Vui lòng đăng nhập' });
    }


    const share = await interactService.sharePost(user_id, postId);
    res.status(201).json({ message: 'Chia sẻ bài viết thành công', status: 'success', data: share });
  } catch (error) {
    res.status(500).json({ message: 'Không thể chia sẻ bài viết' });
  }
};

// GET 
export const getPostInteractions = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;

    const interactions = await interactService.getPostInteractions(postId);
    res.status(200).json(interactions);
  } catch (error) {
    res.status(500).json({ message: 'Không thể lấy thông tin tương tác' });
  }
};
