import { Router } from "express";
import * as getPostAndView from "../services/getPostAndView.service";
import { asyncHandler } from "../middlewares/asyncHandler";
import { verifyToken } from "../middlewares/jwt";

const router = Router();

router.use(verifyToken);

router.get("/:userId", asyncHandler(getPostAndView.getAllPostsByUserId));
router.post("/:postId/view", asyncHandler(getPostAndView.recordPostView));
router.get("/:postId/views/count", asyncHandler(getPostAndView.countPostViews));
router.get("/:postId/viewers", asyncHandler(getPostAndView.getPostViewers));
export default router;
