import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {
  imageWidth = 50;
  coverIsVisible = true;

  books: Book[] = [];

  filterValue = '';

  constructor(private bookDataService: BookDataService) {
    console.log('BookListComponent constructor called');
  }

  async ngOnInit() {
    this.books = await this.bookDataService.getBooks();
  }

  ngOnChanges() {
    console.log('BookListComponent ngOnChanges called');
  }

  ngOnDestroy() {
    console.log('BookListComponent ngOnDestroy called');
  }

  trackByIsbn(book: any): string {
    return book.isbn;
  }

  toggleCover() {
    this.coverIsVisible = !this.coverIsVisible;
  }

  ratingPlus(isbn: string) {
    console.log('Rating increased:', { isbn });
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      book.rating = Math.min(5, book.rating + 0.1);
    }
  }

  ratingMinus(isbn: string) {
    console.log('Rating decreased:', { isbn });
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      book.rating = Math.max(1, book.rating - 0.1);
    }
  }

  async deleteBook(isbn: string) {
    console.log('Deleting book with ISBN:', isbn);
    this.books = await this.bookDataService.deleteBook(isbn);
    console.log('Book deleted, updated book list:', this.books);
  }

  async showBook(isbn: string) {
    const book = await this.bookDataService.getBook(isbn);
    alert(JSON.stringify(book, null, 2));
  }
}
