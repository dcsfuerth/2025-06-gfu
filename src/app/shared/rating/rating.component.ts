import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  standalone: false,
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnChanges {
  //
  @Input()
  stars: number = 1;

  @Input()
  id: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ratingPlus() {
    this.stars = Math.min(5, this.stars + 0.1);
  }
  ratingMinus() {
    this.stars = Math.max(1, this.stars - 0.1);
  }
}
