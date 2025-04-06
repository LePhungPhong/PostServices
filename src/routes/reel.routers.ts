import { Router } from 'express';
import * as reelController from '../controllers/reel.controller';
import { asyncHandler } from '../middlewares/asyncHandler';

const router = Router();

router.post(
    '/uploadReel',
    asyncHandler(reelController.uploadReel)
);