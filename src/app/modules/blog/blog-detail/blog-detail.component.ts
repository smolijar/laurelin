import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsStore } from '../state/posts.store';
import { PostsQuery } from '../state/posts.query';
import { UsersQuery } from 'src/app/state/user/users.query';
import { UserPublic } from 'src/app/state/user/user.model';
import { Post } from '../state/post.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'lin-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.sass'],
})
export class BlogDetailComponent {
  post: Observable<Post>;
  user: Observable<UserPublic>;
  constructor(
    route: ActivatedRoute,
    private postStore: PostsStore,
    public postQuery: PostsQuery,
    private userQuery: UsersQuery
  ) {
    route.paramMap.subscribe(params => {
      this.post = postQuery.selectEntity(params.get('postId')).pipe(
        tap(p => {
          this.user = userQuery.selectEntity(p.authorUid);
        })
      );
    });
  }
  public delete(id: string) {
    this.postStore.remove(id);
  }
}
