import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UsersStore, UsersState } from './users.store';
import { Post } from 'src/app/modules/blog/state/post.model';
import { Observable } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {
  constructor(protected store: UsersStore) {
    super(store);
  }
  selectAuthor = (post: Post) => this.selectEntity(post.authorUid);
}
