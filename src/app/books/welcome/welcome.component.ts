import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Observable, of, Subject, takeUntil, timer } from 'rxjs';
import { decrement, increment, reset } from '../../counter/counter.actions';

@Component({
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  public destroy$ = new Subject();

  public obs1$: Observable<number> = timer(0, 500);
  count$: Observable<number> = of(0);

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select((state) => state.count);
  }

  ngOnInit() {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => console.log(x));
  }

  ngOnDestroy() {
    this.destroy$.next('bumm.');
  }

  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
