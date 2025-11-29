import { Router } from "express";
import * as postController from "../controllers/post.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
import { verifyToken } from "../middlewares/jwt";

const router = Router();

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

router.get("/dashboard", asyncHandler(postController.dashboard));
router.get("/count", asyncHandler(postController.countPost));
router.get("/weekly", asyncHandler(postController.weeklyPostActivity));
router.get("/recent", asyncHandler(postController.recentPostActivities));

export default router;
