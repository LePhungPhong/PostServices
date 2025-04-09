import { Request, Response } from 'express';
import * as postService from '../services/post.service';
import { CreatePostDto, UpdatePostDto } from '../types/post.types';

export const createPost = async (req: Request, res: Response) => {
  try {
    const postData: CreatePostDto = req.body;
    if (!postData.user_id) {
      return res.status(400).json({ message: 'Vui lòng đăng nhập' });
    }

    const newPost = await postService.createPost(postData);
    res.status(200).json({
      status: 'success',
      message: 'Tạo bài viết thành công',
      data: newPost
    });
  } catch (error) {
    res.status(500).json({ message: 'Không thể tạo bài viết' });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const postData: UpdatePostDto = req.body;

    const updatedPost = await postService.updatePost(postId, postData);
    await postService.updatePost(postId, postData);
    res.status(200).json({
      message: 'Cập nhật bài viết thành công',
      status: 'success', data: updatedPost
    });
  } catch (error) {
    if (error instanceof Error && error.message === 'Không tìm thấy bài viết') {
      return res.status(404).json({ message: error.message });
    }

    res.status(500).json({ message: 'Không thể cập nhật bài viết' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    await postService.deletePost(postId);
    res.status(200).json({ message: 'Xóa bài viết thành công' });
  } catch (error) {
    if (error instanceof Error && error.message === 'Không tìm thấy bài viết') {
      return res.status(404).json({ message: error.message });
    }

    res.status(500).json({ message: 'Không thể xóa bài viết' });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const post = await postService.getPostById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Không tìm thấy bài viết' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Không thể lấy thông tin bài viết' });
  }
};
