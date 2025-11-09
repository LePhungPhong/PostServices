import { Request, Response } from "express";
import * as interactService from "../services/interact.service";

// ====================== LIKE ======================
export const likePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    // tuỳ bạn: lấy từ token hay body, ở đây ưu tiên token
    const userId = (req as any).user?.sub;

    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }

    const result = await interactService.likePost(userId, postId);

    if ("message" in result) {
      // toggle off case
      return res.status(200).json({
        message: result.message,
        status: "success",
        data: null,
      });
    }

    return res.status(201).json({
      message: "Thích bài viết thành công",
      status: "success",
      data: null,
    });
  } catch (error) {
    console.error("[likePost]", error);
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Không thể thích bài viết", status: "error" });
  }
};

export const unlikePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const userId = (req as any).user?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }

    await interactService.unlikePost(userId, postId);

    return res.status(200).json({
      message: "Bỏ thích thành công",
      status: "success",
      data: null,
    });
  } catch (error) {
    console.error("[unlikePost]", error);
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Không thể bỏ thích bài viết", status: "error" });
  }
};

// ====================== COMMENT ======================
export const createComment = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const { content, parent_id } = req.body;
    const userId = (req as any).user?.sub;

    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }

    const comment = await interactService.createComment(
      userId,
      postId,
      content,
      parent_id
    );

    return res.status(200).json({
      message: "Tạo bình luận thành công",
      status: "success",
      data: comment,
    });
  } catch (error) {
    console.error("[createComment]", error);
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Không thể tạo bình luận", status: "error" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.commentId;
    const userId = (req as any).user?.sub;

    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }

    const result = await interactService.deleteComment(commentId);

    return res.status(200).json({
      message: "Xóa bình luận thành công",
      status: "success",
      data: result,
    });
  } catch (error) {
    console.error("[deleteComment]", error);
    if (
      error instanceof Error &&
      error.message === "Không tìm thấy bình luận"
    ) {
      return res.status(404).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Không thể xóa bình luận", status: "error" });
  }
};

// ====================== SHARE ======================
export const sharePost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;
    const userId = (req as any).user?.sub;

    if (!userId) {
      return res.status(401).json({ message: "Vui lòng đăng nhập" });
    }

    const share = await interactService.sharePost(userId, postId);

    return res.status(201).json({
      message: "Chia sẻ bài viết thành công",
      status: "success",
      data: share,
    });
  } catch (error) {
    console.error("[sharePost]", error);
    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }
    return res
      .status(500)
      .json({ message: "Không thể chia sẻ bài viết", status: "error" });
  }
};

// ====================== GET INTERACTIONS ======================
export const getPostInteractions = async (req: Request, res: Response) => {
  try {
    const postId = req.params.postId;

    const interactions = await interactService.getPostInteractions(postId);

    return res.status(200).json({
      status: "success",
      data: interactions,
    });
  } catch (error) {
    console.error("[getPostInteractions]", error);
    return res.status(500).json({
      message: "Không thể lấy thông tin tương tác",
      status: "error",
    });
  }
};
