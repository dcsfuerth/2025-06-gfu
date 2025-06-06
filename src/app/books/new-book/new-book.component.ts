import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'book-new-book',
  standalone: false,
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css',
})
export class NewBookComponent {
  public bookForm: FormGroup = new FormGroup({
    isbn: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    coverUrl: new FormControl('', []),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    rating: new FormControl(3, [
      Validators.required,
      Validators.min(1),
      Validators.max(5),
    ]),
  });

  saveBook() {
    alert(JSON.stringify(this.bookForm.value));
  }
}
