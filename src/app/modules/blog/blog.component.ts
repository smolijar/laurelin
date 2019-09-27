import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from './state/posts.service';
import { PostsQuery } from './state/posts.query';
import { Post } from './state/post.model';
import { Observable, of, merge, from, forkJoin } from 'rxjs';
import { UsersService } from 'src/app/state/user/users.service';
import { UsersQuery } from 'src/app/state/user/users.query';
import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';
import { map, flatMap, combineLatest, first } from 'rxjs/operators';

@Component({
  selector: 'lin-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
})
export class BlogComponent implements OnInit, OnDestroy {
  public posts$: Observable<Post[]>;
  constructor(
    public postService: PostsService,
    private postsQuery: PostsQuery,
    public userService: UsersService,
    public usersQuery: UsersQuery
  ) {}

  ngOnInit() {
    this.postService
      .syncCollection()
      .pipe(untilDestroyed(this))
      .subscribe();
    this.userService
      .syncCollection()
      .pipe(untilDestroyed(this))
      .subscribe();

    // Get the list from the store
    this.posts$ = this.postsQuery.selectAll();
  }

  ngOnDestroy() {}

  public add() {
    this.postService.add({ title: 'Star Wars', text: 'fooo' } as any);
  }
  public delete(id: string) {
    this.postService.remove(id);
  }
}
