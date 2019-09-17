import { UserPublic } from 'src/app/state/user/user.model';
import { firestore } from 'firebase';

export interface Post {
  id: string;
  title: string;
  text: string;
  authorUid: string;
  imageUrl: string;
  createdAt: { seconds: number; nanoseconds: number };
  updatedAt: { seconds: number; nanoseconds: number };
  user?: UserPublic;
}

/**
 * A factory function that creates Posts
 */
export function createPost(params: Partial<Post>) {
  return {
    ...params,
    createdAt: firestore.Timestamp.fromDate(new Date()),
    updatedAt: firestore.Timestamp.fromDate(new Date()),
  } as Post;
}
