import { Router } from "express";
import * as interactController from "../controllers/interact.controller";
import { asyncHandler } from "../middlewares/asyncHandler";
import { verifyToken } from "../middlewares/jwt";

const router = Router();

router.use(verifyToken);
/**
 * @route [POST] /api/interactions/like/:postId
 * @desc Thích bài viết
 * @access Private
 */
router.post("/like/:postId", asyncHandler(interactController.likePost));

/**
 * @route [POST] /interactions/comment/:postId
 * @desc Tạo bình luận mới cho bài viết
 * @access Private
 */
router.post("/comment/:postId", asyncHandler(interactController.createComment));
/**
 * @route [DELETE] /interactions/comment/:commentId
 * @desc Xoa bình luận của bài viết
 * @access Private
 */
router.delete(
  "/comment/:commentId",
  asyncHandler(interactController.deleteComment)
);
/**
 * @route [POST] /interactions/share/:postId
 * @desc Chia sẻ bài viết
 * @access Private
 */
router.post("/share/:postId", asyncHandler(interactController.sharePost));

/**
 * @route [GET] /interactions/:postId
 * @desc Lấy thông tin tương tác (like, comment, share) của bài viết
 * @access Private
 */
router.get("/:postId", asyncHandler(interactController.getPostInteractions));

export default router;
