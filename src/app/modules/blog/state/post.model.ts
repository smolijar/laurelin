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

export function createPost(
  params: Pick<Post, 'title' | 'text' | 'authorUid'>
): Post {
  return {
    ...params,
    id: (Math.random() * 1e5).toString(36).replace('.', ''),
    imageUrl: `https://cataas.com/cat/cute/says/hello?q=${new Date().toISOString()}`,
    createdAt: firestore.Timestamp.fromDate(new Date()),
    updatedAt: firestore.Timestamp.fromDate(new Date()),
  };
}

export function createPostUpdate(
  params: Pick<Post, 'title' | 'text'>
): Partial<Post> {
  return {
    ...params,
    updatedAt: firestore.Timestamp.fromDate(new Date()),
  };
}
