import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [CalculatorComponent, RatingComponent, NotFoundComponent],
  imports: [BrowserModule, FormsModule],
  exports: [CalculatorComponent, RatingComponent, NotFoundComponent],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
