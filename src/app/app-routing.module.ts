import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { bookDetailGuard } from './books/book-detail.guard';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'books/:isbn',
    component: BookDetailComponent,
    canActivate: [bookDetailGuard],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
