import { Component, TrackByFunction } from '@angular/core';

@Component({
  selector: 'book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent {
  books = [
    { isbn: '123456789', title: 'Angular 19', price: 29.99, rating: 4 },
    { isbn: '123456790', title: 'Angular 20', price: 39.99, rating: 4.5 },
    { isbn: '123456791', title: 'PHP', price: 19.99, rating: 3.5 },
  ];

  trackByIsbn(book: any): string {
    return book.isbn;
  }
}
