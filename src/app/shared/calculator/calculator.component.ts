import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  standalone: false,
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  x: number = 0;
  y: number = 0;
  result: number = 0;

  add() {
    this.result = +this.x + +this.y;
  }

  subtract() {
    this.result = +this.x - +this.y;
  }

  clear() {
    this.x = 0;
    this.y = 0;
    this.result = 0;
  }
}
