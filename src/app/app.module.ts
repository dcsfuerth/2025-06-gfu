import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './shared/calculator/calculator.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
