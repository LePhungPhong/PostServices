import { Router } from 'express';
import * as storyController from '../controllers/story.controller';
import { asyncHandler } from '../middlewares/asyncHandler';
const router = Router();

router.post("/story", asyncHandler(storyController.createStory));
router.get("/story/:id", asyncHandler(storyController.getStoryById));
router.delete("/story/:id", asyncHandler(storyController.deletestory));
export default router;