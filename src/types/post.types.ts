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
  mediaType: MediaTypeEnum;
  postType: PostTypeEnum;
}

export interface UpdatePostDto {
  title?: string;
  content?: string;
  visibility?: VisibilityEnum;
  hashtags?: string[];
  tagged_friends?: string[];
}