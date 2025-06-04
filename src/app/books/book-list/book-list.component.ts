import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  TrackByFunction,
  ViewEncapsulation,
} from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy {
  imageWidth = 50;
  coverIsVisible = true;

  books: Book[] = [
    {
      isbn: '123456789',
      title: 'Angular 19',
      price: 29.99,
      rating: 4,
      coverUrl:
        'https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71rUdxFkaCL._AC_UY436_QL65_.jpg',
    },
    {
      isbn: '123456790',
      title: 'Angular 20',
      price: 39.99,
      rating: 4.5,
      coverUrl:
        'https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/61YTE17hNYL._AC_UY436_QL65_.jpg',
    },
    {
      isbn: '123456791',
      title: 'PHP',
      price: 9.9,
      rating: 3.5,
      coverUrl:
        'https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/71S1L2AntIL._AC_UY436_QL65_.jpg',
    },
  ];

  filterValue = '';

  constructor() {
    console.log('BookListComponent constructor called');
  }

  ngOnInit() {
    console.log('BookListComponent ngOnInit called');
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
}
