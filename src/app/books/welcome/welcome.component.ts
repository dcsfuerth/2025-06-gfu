import { Component } from '@angular/core';
import { interval, Observable, of, Subject, takeUntil, timer } from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  public destroy$ = new Subject();

  public obs1$: Observable<number> = timer(0, 500);
  count$: Observable<number> = of(0);

  constructor() {}

  ngOnInit() {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => console.log(x));
  }

  ngOnDestroy() {
    this.destroy$.next('bumm.');
  }

  increment() {}
  decrement() {}
  reset() {}
}
