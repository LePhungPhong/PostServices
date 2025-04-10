import { Router } from 'express';
import * as getPostAndView from "../services/getPostAndView.service";
import { asyncHandler } from '../middlewares/asyncHandler';

const router = Router();

router.get("/:userId", asyncHandler(getPostAndView.getAllPostsByUserId));
router.post("/:postId/view", asyncHandler(getPostAndView.recordPostView));
router.get("/:postId/views/count", asyncHandler(getPostAndView.countPostViews));
router.get("/:postId/viewers", asyncHandler(getPostAndView.getPostViewers));