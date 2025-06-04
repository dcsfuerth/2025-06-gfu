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
  stars: number = 0;

  @Input()
  id: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
}
