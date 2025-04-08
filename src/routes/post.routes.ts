
import { Router } from 'express';
import * as postController from '../controllers/post.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
import { uploadMediaMiddleware } from '../middlewares/uploadHelper';
import { MediaTypeEnum } from '@prisma/client';

const router = Router();

/**
 * @route [POST] /posts
 * @desc Tạo bài viết mới
 * @access Private
 */
router.post('/', uploadMediaMiddleware, asyncHandler(postController.createPost));

/**
 * @route [PUT] /posts/:id
 * @desc Cập nhật bài viết
 * @access Private
 */
router.put('/:id', asyncHandler(postController.updatePost));

/**
 * @route [DELETE] /posts/:id
 * @desc Xóa bài viết
 * @access Private
 */
router.delete('/:id', asyncHandler(postController.deletePost));

export default router;
