import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './modules/blog/blog.component';
import { BlogNewComponent } from './modules/blog/blog-new/blog-new.component';
import { BlogDetailComponent } from './modules/blog/blog-detail/blog-detail.component';

const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/new', component: BlogNewComponent },
  { path: 'blog/:postId', component: BlogDetailComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
