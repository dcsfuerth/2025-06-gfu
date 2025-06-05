import { Component } from '@angular/core';
import { interval, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  //  public mySubscriptions$: Subscription[] = [];
  public destroy$ = new Subject();

  constructor() {
    //
    // const obs1$ = timer(0, 500);
    // const obs2$ = obs1$.pipe(filter((value) => value > 10));
    // const obs3$ = obs2$.pipe(map((value) => value * 2));
    // obs3$.subscribe({
    //   next: (value) => console.log('Next:', value),
    //   error: (error) => console.error('Error:', error),
    //   complete: () => console.log('Completed'),
    // });
    // const mySubject$ = new Subject<string>();
    // mySubject$.next('Hallo');
    // mySubject$.subscribe((value) =>
    //   console.log('Nachricht aus dem Subject 1:', value)
    // );
    // mySubject$.next('Welt');
    // mySubject$.subscribe((value) =>
    //   console.log('Nachricht aus dem Subject 2:', value)
    // );
    // mySubject$.next('Ende der Welt');
    // mySubject$.complete();
  }

  ngOnInit() {
    // this.mySubscriptions$.push(
    //   interval(1000).subscribe((daten) => {
    //     console.log('Daten:', daten);
    //   })
    // );

    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe((x) => console.log(x));
  }

  ngOnDestroy() {
    // this.mySubscriptions$.forEach((subscription) => {
    //   if (subscription) {
    //     subscription.unsubscribe();
    //   }
    // });
    this.destroy$.next('bumm.');
  }
}
