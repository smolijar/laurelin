import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './post/post.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouterModule } from '@angular/router';
import { BlogFormComponent } from './blog-post/blog-form.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LayoutModule } from '../layout/layout.module';
import { I18nModule } from '../shared/i18n/i18n.module';

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    BlogDetailComponent,
    BlogFormComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    LayoutModule,
    I18nModule,
  ],
  exports: [BlogComponent],
})
export class BlogModule {}
