import { Component, OnInit } from '@angular/core';
import { PostsService } from '../state/posts.service';
import { SessionQuery } from 'src/app/state/session/session.query';
import { first } from 'rxjs/operators';

@Component({
  selector: 'lin-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.sass'],
})
export class BlogNewComponent implements OnInit {
  constructor(
    private postService: PostsService,
    private sessionQuery: SessionQuery
  ) {}

  ngOnInit() {}

  async createPost() {
    const uid = (await this.sessionQuery.user.pipe(first()).toPromise()).uid;
    const post = await this.postService.add({
      title: `New post ${new Date().toLocaleString()}`,
      authorUid: uid,
      imageUrl: `https://cataas.com/cat/cute/says/hello?q=${new Date().toISOString()}`,
      text: 'Velryb nešlo, soudí že orgány novinky lidmi, zpočátku tvarů u kyčle s mladými. '.repeat(
        200
      ),
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);
    console.log(post);
  }
}
