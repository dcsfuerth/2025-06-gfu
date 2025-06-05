import { Component } from '@angular/core';
import { filter, map, of, Subject, timer } from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  constructor() {
    //
    const obs1$ = timer(0, 500);
    const obs2$ = obs1$.pipe(filter((value) => value > 10));
    const obs3$ = obs2$.pipe(map((value) => value * 2));

    // obs3$.subscribe({
    //   next: (value) => console.log('Next:', value),
    //   error: (error) => console.error('Error:', error),
    //   complete: () => console.log('Completed'),
    // });

    const mySubject$ = new Subject<string>();
    mySubject$.next('Hallo');

    mySubject$.subscribe((value) =>
      console.log('Nachricht aus dem Subject 1:', value)
    );

    mySubject$.next('Welt');

    mySubject$.subscribe((value) =>
      console.log('Nachricht aus dem Subject 2:', value)
    );

    mySubject$.next('Ende der Welt');
    mySubject$.complete();
  }
}
