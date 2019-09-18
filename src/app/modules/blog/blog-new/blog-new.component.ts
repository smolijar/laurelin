import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../state/posts.service';
import { SessionQuery } from 'src/app/state/session/session.query';
import { first } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';
import { Router } from '@angular/router';

export interface FormsState {
  post: {
    title: string;
    text: string;
  };
}

@Component({
  selector: 'lin-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.sass'],
})
export class BlogNewComponent implements OnInit, OnDestroy {
  public postForm: FormGroup;
  constructor(
    private postService: PostsService,
    private sessionQuery: SessionQuery,
    private formsManager: AkitaNgFormsManager<FormsState>,
    private router: Router
  ) {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      text: new FormControl(''),
    });
    this.formsManager.upsert('post', this.postForm);
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.formsManager.unsubscribe();
  }

  async createPost({ text, title }: FormsState['post']) {
    const uid = (await this.sessionQuery.user.pipe(first()).toPromise()).uid;
    const post = await this.postService.add({
      title,
      text,
      authorUid: uid,
      imageUrl: `https://cataas.com/cat/cute/says/hello?q=${new Date().toISOString()}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);
    this.router.navigate(['/blog']);
  }
}
