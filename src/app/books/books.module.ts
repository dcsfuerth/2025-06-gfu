import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFilterPipe } from './book-filter.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BookListComponent,
    BookFilterPipe,
    WelcomeComponent,
    BookDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    BookListComponent,
    BookFilterPipe,
    WelcomeComponent,
    BookDetailComponent,
  ],
  providers: [],
  bootstrap: [],
})
export class BooksModule {}
