import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookDataService } from '../book-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book-new-book',
  standalone: false,
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css',
})
export class NewBookComponent {
  constructor(
    private bookDataService: BookDataService,
    private router: Router
  ) {}

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

  ngOnInit() {
    this.bookForm.valueChanges.subscribe((value) => {
      console.log('Form value changed:', value);
    });
  }

  async saveBook() {
    await this.bookDataService.saveBook(this.bookForm.value);
    this.router.navigate(['/books']);
  }
}
