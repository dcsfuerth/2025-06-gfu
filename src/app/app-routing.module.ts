import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { WelcomeComponent } from './books/welcome/welcome.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  // { path: '', component: AppComponent, pathMatch: 'full' },
  { path: 'books', component: BookListComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'books/:isbn', component: BookDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
