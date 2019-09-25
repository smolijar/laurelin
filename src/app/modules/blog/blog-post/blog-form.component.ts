import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../state/posts.service';
import { SessionQuery } from 'src/app/state/session/session.query';
import { first, map, tap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsQuery } from '../state/posts.query';
import { Post, createPost, createPostUpdate } from '../state/post.model';
import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';

export interface FormsState {
  post: {
    title: string;
    text: string;
  };
}

@Component({
  selector: 'lin-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.sass'],
})
export class BlogFormComponent implements OnInit, OnDestroy {
  public postForm: FormGroup;
  public post: Post;
  constructor(
    private postService: PostsService,
    private postsQuery: PostsQuery,
    private sessionQuery: SessionQuery,
    private formsManager: AkitaNgFormsManager<FormsState>,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      text: new FormControl(''),
    });
  }

  ngOnInit() {
    this.postService
      .syncCollection()
      .pipe(untilDestroyed(this))
      .subscribe();

    this.route.paramMap.subscribe(params => {
      this.postsQuery.selectEntity(params.get('postId')).pipe(
        tap(p => {
          this.post = p;
          this.postForm.setValue({ title: p.title, text: p.text });
        })
      );
    });
    this.formsManager.upsert('post', this.postForm);
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe();
  }

  async createPost({ text, title }: FormsState['post']) {
    const authorUid = (await this.sessionQuery.user.pipe(first()).toPromise())
      .uid;
    if (this.post) {
      await this.postService.update(
        this.post.id,
        createPostUpdate({
          title,
          text,
        })
      );
      this.router.navigate(['/blog', this.post.id]);
    } else {
      await this.postService.add(
        createPost({
          title,
          text,
          authorUid,
        })
      );
      this.router.navigate(['/blog']);
    }
    this.formsManager.remove('post');
  }
}
