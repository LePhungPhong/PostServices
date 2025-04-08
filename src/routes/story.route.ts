import { Router } from 'express';
import * as storyController from '../controllers/story.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
import { uploadMediaMiddleware } from '../middlewares/uploadHelper';
const router = Router();

router.post("/story", uploadMediaMiddleware, asyncHandler(storyController.createStory));
router.get("/story/:id", asyncHandler(storyController.getStoryById));
router.delete("/story/:id", asyncHandler(storyController.deletestory));
export default router;