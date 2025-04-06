
import { Request, Response } from 'express';
import * as interactService from '../services/interact.service';

// LIKE 
export const likePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.user_id;

    if (!userId) {
      return res.status(400).json({ error: 'ID người dùng là bắt buộc' });
    }

    const like = await interactService.likePost(userId, postId);
    res.status(201).json(like);
  } catch (error) {
    console.error('Lỗi khi thích bài viết:', error);
    res.status(500).json({ error: 'Không thể thích bài viết' });
  }
};

export const unlikePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const userId = req.body.user_id;

    if (!userId) {
      return res.status(400).json({ error: 'ID người dùng là bắt buộc' });
    }

    await interactService.unlikePost(userId, postId);
    res.status(200).json({ message: 'Bỏ thích thành công' });
  } catch (error) {
    console.error('Lỗi khi bỏ thích bài viết:', error);
    res.status(500).json({ error: 'Không thể bỏ thích bài viết' });
  }
};

// COMMENT 
export const createComment = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const { user_id, content, parent_id } = req.body;

    if (!user_id || !content) {
      return res.status(400).json({
        error: 'ID người dùng và nội dung là bắt buộc'
      });
    }

    const comment = await interactService.createComment(user_id, postId, content, parent_id);
    res.status(201).json(comment);
  } catch (error) {
    console.error('Lỗi khi tạo bình luận:', error);
    res.status(500).json({ error: 'Không thể tạo bình luận' });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const userId = req.body.user_id;

    if (!userId) {
      return res.status(400).json({ error: 'ID người dùng là bắt buộc' });
    }

    await interactService.deleteComment(commentId);
    res.status(200).json({ message: 'Xóa bình luận thành công' });
  } catch (error) {
    console.error('Lỗi khi xóa bình luận:', error);
    res.status(500).json({ error: 'Không thể xóa bình luận' });
  }
}


// SHARE 
export const sharePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const { user_id } = req.body;

    if (!user_id) {
      return res.status(400).json({ error: 'ID người dùng là bắt buộc' });
    }

    const share = await interactService.sharePost(user_id, postId);
    res.status(201).json(share);
  } catch (error) {
    console.error('Lỗi khi chia sẻ bài viết:', error);
    res.status(500).json({ error: 'Không thể chia sẻ bài viết' });
  }
};

// GET 
export const getPostInteractions = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;

    const interactions = await interactService.getPostInteractions(postId);
    res.status(200).json(interactions);
  } catch (error) {
    console.error('Lỗi khi lấy thông tin tương tác:', error);
    res.status(500).json({ error: 'Không thể lấy thông tin tương tác' });
  }
};
