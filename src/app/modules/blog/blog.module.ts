import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './post/post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    BlogDetailComponent,
    BlogNewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [BlogComponent],
})
export class BlogModule {}
