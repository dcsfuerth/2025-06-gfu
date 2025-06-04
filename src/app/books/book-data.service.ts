import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor() {}

  getBooks(): Book[] {
    return [
      {
        isbn: '123456789',
        title: 'Angular 19',
        price: 30.99,
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
  }
}
