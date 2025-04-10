
import { Router } from 'express';
import * as postController from '../controllers/post.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
import { getAllPostsByUserId } from '../controllers/post.controller';


const router = Router();

/**
 * @route [POST] /posts
 * @desc Tạo bài viết mới
 * @access Private
 */
router.post('/', asyncHandler(postController.createPost));

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

/**
 * @route [GET] /posts/:id
 * @desc Lấy thông tin bài viết theo id
 * @access Private
 */
router.get('/:userID/:page', asyncHandler(postController.getAllPostsByUserId));
export default router;
