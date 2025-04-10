import { Datetime } from "aws-sdk/clients/costoptimizationhub";

export type VisibilityEnum = 'public' | 'private' | 'friends';
export type CensorEnum = 'approved' | 'pending' | 'rejected' | 'under_review';
export type MediaTypeEnum = 'image' | 'video' | 'file'
export type PostTypeEnum = 'post' | 'reel' | 'story'
export interface CreatePostDto {
  user_id: string;
  title?: string;
  content?: string;
  visibility?: VisibilityEnum;
  hashtags?: string[];
  tagged_friends?: string[];
  mediaUrls?: string[];
  mediaType?: MediaTypeEnum;
  postType: PostTypeEnum;
  expired_at?: Datetime;
}

export interface UpdatePostDto {
  title?: string;
  content?: string;
  visibility?: VisibilityEnum;
  hashtags?: string[];
  tagged_friends?: string[];
}
export interface VideoUploadData {
  reelData: CreatePostDto;
  videoFile: Express.Multer.File;
}