import { Injectable } from '@angular/core';
import { PostsStore, PostsState } from './posts.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';

@Injectable({ providedIn: 'root' })
@CollectionConfig({ path: 'posts' })
export class PostsService extends CollectionService<PostsState> {
  constructor(store: PostsStore) {
    super(store);
  }
}
