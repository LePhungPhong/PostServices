import { Request, Response } from "express";
import * as postService from "../services/post.service";
import { CreatePostDto, UpdatePostDto } from "../types/post.types";
import { publish } from "../config/nats";

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

    const newPost = await postService.createPost(postData);

    await publish("post.created", {
      id: newPost.id,
      author_id: newPost.userId,
      author_username: newPost.user?.username || "",
      author_fullname: newPost.user?.fullname || "",
      author_avatar: newPost.user?.avatarUrl || "",
      title: newPost.title,
      content: newPost.content,
      hashtags: newPost.hashtags || [],
      media: newPost.media || [],
      created_at: newPost.createdAt,
      updated_at: newPost.updatedAt,
      visibility: newPost.visibility,
      like_count: 0,
      comment_count: 0,
      share_count: 0,
    });

    res.status(201).json({
      status: "success",
      message: "Tạo bài viết thành công",
      data: newPost,
    });
  } catch (error) {
    console.error("[createPost]", error);
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

    await publish("post.updated", {
      id: updatedPost.id,
      author_id: updatedPost.userId,
      author_username: updatedPost.user?.username || "",
      author_fullname: updatedPost.user?.fullname || "",
      author_avatar: updatedPost.user?.avatarUrl || "",
      title: updatedPost.title,
      content: updatedPost.content,
      hashtags: updatedPost.hashtags || [],
      media: updatedPost.media || [],
      created_at: updatedPost.createdAt,
      updated_at: updatedPost.updatedAt,
      visibility: updatedPost.visibility,
      like_count: 0,
      comment_count: 0,
      share_count: 0,
    });

    res.status(200).json({
      message: "Cập nhật bài viết thành công",
      status: "success",
      data: updatedPost,
    });
  } catch (error) {
    console.error("[updatePost]", error);
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

    await postService.deletePost(postId);

    // ✅ Publish event xóa
    await publish("post.deleted", { id: postId });

    res.status(200).json({ message: "Xóa bài viết thành công" });
  } catch (error) {
    console.error("[deletePost]", error);
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
    console.error("[getPost]", error);
    res.status(500).json({ message: "Không thể lấy thông tin bài viết" });
  }
};
