import { Router } from 'express';
import * as reelController from '../controllers/reel.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
import * as getPostController from '../controllers/getPost.controller';
const router = Router();
/**
 * @route [POST] /reel/:id
 * @desc Tạo bài reel mới và upload video
 * @access Private
 */
router.post(
    '/reel/',
    asyncHandler(reelController.createReel)
);
/**
 * @route [GET] /reel/:id
 * @desc Lấy thông tin bài reel theo id
 * @access Private
 */
router.get(
    '/reel/:id',
    asyncHandler(reelController.getReelById)
);
/**
 * @route [DELETE] /reel/:id
 * @desc Xóa bài reel theo id
 * @access Private
 */
router.delete(
    '/reel/:id', asyncHandler(reelController.deleteReel)
);

router.get("/:userId/:postType/:page/:viewerID", asyncHandler(getPostController.getAllPostsByUserId));
export default router;