import { Request, Response } from "express";
import * as postService from "../services/post.service";
import { CreatePostDto, UpdatePostDto } from "../types/post.types";

export const createPost = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.sub;

    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }
    const postData: CreatePostDto = {
      ...req.body,
      user_id: userId,
    };
    console.log(postData);

    const newPost = await postService.createPost(postData);

    res.status(201).json({
      status: "success",
      message: "Tạo bài viết thành công",
      data: newPost,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else res.status(500).json({ message: "Không thể tạo bài viết" });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const userId = (req as any).user?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }

    const postData: UpdatePostDto = {
      ...req.body,
      user_id: userId,
    };

    const updatedPost = await postService.updatePost(postId, postData);

    res.status(200).json({
      message: "Cập nhật bài viết thành công",
      status: "success",
      data: updatedPost,
    });
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy bài viết") {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: "Không thể cập nhật bài viết" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;
    const userId = (req as any).user?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }

    await postService.deletePost(postId); //
    res.status(200).json({ message: "Xóa bài viết thành công" });
  } catch (error) {
    if (error instanceof Error && error.message === "Không tìm thấy bài viết") {
      return res.status(404).json({ message: error.message });
    }
    res.status(500).json({ message: "Không thể xóa bài viết" });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const post = await postService.getPostById(postId);

    if (!post) {
      return res.status(404).json({ message: "Không tìm thấy bài viết" });
    }

    res.status(200).json({ status: "success", data: post });
  } catch (error) {
    res.status(500).json({ message: "Không thể lấy thông tin bài viết" });
  }
};

// export const getAllPostsByUserId = async (req: Request, res: Response) => {
//   try {
//     const userId = req.params.userId;
//     const page = parseInt(req.params.page as string) || 1;

//     const viewerId = (req as any).user?.sub;
//     if (!viewerId) {
//       return res.status(401).json({ message: "Vui lòng đăng nhập" });
//     }
//     // if (userId !== viewerId && visibility !== "public") {
//     //   return res.status(403).json({ message: "Không có quyền truy cập" });
//     // }
//     const posts = await postService.getAllPostsByUserId(userId, page);

//     res.status(200).json({
//       message: "Lấy danh sách bài viết thành công",
//       status: "success",
//       data: posts,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Không thể lấy danh sách bài viết" });
//   }
// };
