import { Router } from 'express';
import * as storyController from '../controllers/story.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
const router = Router();
router.post("/", asyncHandler(storyController.createStory));
router.get("/:id", asyncHandler(storyController.getStoryById));
router.delete("/:id", asyncHandler(storyController.deletestory));
export default router;