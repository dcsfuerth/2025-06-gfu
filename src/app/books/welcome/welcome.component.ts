import { Component } from '@angular/core';
import { of, timer } from 'rxjs';

@Component({
  standalone: false,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
})
export class WelcomeComponent {
  constructor() {
    //
    const obs1$ = timer(0, 500);
    obs1$.subscribe({
      next: (value) => console.log('Next:', value),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Completed'),
    });
  }
}
