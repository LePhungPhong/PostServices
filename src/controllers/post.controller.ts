import { Request, Response } from 'express';
import * as postService from '../services/post.service';
import { CreatePostDto, UpdatePostDto } from '../types/post.types';

export const createPost = async (req: Request, res: Response) => {
  try {
    const postData: CreatePostDto = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!postData.user_id) {
      return res.status(400).json({ error: 'ID người dùng là bắt buộc' });
    }

    const newPost = await postService.createPost(postData);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Lỗi khi tạo bài viết:', error);
    res.status(500).json({ error: 'Không thể tạo bài viết' });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const postData: UpdatePostDto = req.body;

    const updatedPost = await postService.updatePost(postId, postData);
    res.json(updatedPost);
  } catch (error) {
    console.error('Lỗi khi cập nhật bài viết:', error);
    
    if (error instanceof Error && error.message === 'Không tìm thấy bài viết') {
      return res.status(404).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Không thể cập nhật bài viết' });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    
    await postService.deletePost(postId);
    res.status(200).json({ message: 'Xóa bài viết thành công' });
  } catch (error) {
    console.error('Lỗi khi xóa bài viết:', error);
    
    if (error instanceof Error && error.message === 'Không tìm thấy bài viết') {
      return res.status(404).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Không thể xóa bài viết' });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    
    const post = await postService.getPostById(postId);
    
    if (!post) {
      return res.status(404).json({ error: 'Không tìm thấy bài viết' });
    }
    
    res.json(post);
  } catch (error) {
    console.error('Lỗi khi lấy thông tin bài viết:', error);
    res.status(500).json({ error: 'Không thể lấy thông tin bài viết' });
  }
};
