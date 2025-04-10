import { Router } from "express";
import * as postController from "../controllers/post.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
import { verifyToken } from "../utils/jwt";

const router = Router();

/**
 * @route [GET] /posts/:id
 * @desc Lấy thông tin bài viết theo id
 * @access Private
 */
router.get("/:userID/:page", asyncHandler(postController.getAllPostsByUserId));

// PRIVATE ROUTES
router.use(verifyToken);
/**
 * @route [POST] /posts
 * @desc Tạo bài viết mới
 * @access Private
 */
router.post("/", asyncHandler(postController.createPost));

/**
 * @route [PUT] /posts/:id
 * @desc Cập nhật bài viết
 * @access Private
 */
router.put("/:id", asyncHandler(postController.updatePost));

/**
 * @route [DELETE] /posts/:id
 * @desc Xóa bài viết
 * @access Private
 */
router.delete("/:id", asyncHandler(postController.deletePost));

export default router;
