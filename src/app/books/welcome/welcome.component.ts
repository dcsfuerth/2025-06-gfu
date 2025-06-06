import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Observable, of, Subject, takeUntil, timer } from 'rxjs';
import { decrement, increment, reset } from '../../counter/counter.actions';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  saveForm() {
    throw new Error('Method not implemented.');
  }
  public destroy$ = new Subject();

  public obs1$: Observable<number> = timer(0, 500);
  count$: Observable<number> = of(0);

  public formGroup: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

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
