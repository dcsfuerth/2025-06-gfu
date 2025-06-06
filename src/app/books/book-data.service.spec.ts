import { TestBed } from '@angular/core/testing';

import { BookDataService } from './book-data.service';
import { of } from 'rxjs';
import { Book } from './book';

const TEST_BOOKS: Book[] = [
  {
    isbn: '123',
    title: 'Angular Basics',
    price: 29.99,
    rating: 4.5,
    coverUrl: 'http://example.com/angular.jpg',
  },
  {
    isbn: '456',
    title: 'PHP Programming',
    price: 39.99,
    rating: 4.7,
    coverUrl: 'http://example.com/php.jpg',
  },
  {
    isbn: '789',
    title: 'JavaScript Essentials',
    price: 34.99,
    rating: 4.2,
    coverUrl: 'http://example.com/js.jpg',
  },
];

describe('BookDataService', () => {
  let bookDataService: BookDataService;
  let mockHttp: any;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    bookDataService = new BookDataService(mockHttp);
  });

  it('should be created', () => {
    expect(bookDataService).toBeTruthy();
  });

  it('should call getBooks', async () => {
    mockHttp.get.and.returnValue(of(TEST_BOOKS));
    const books = await bookDataService.getBooks();
    expect(mockHttp.get).toHaveBeenCalledWith('http://localhost:3000/books');
    expect(books).toEqual(
      TEST_BOOKS
      // { isbn: '', title: '', price: 1, coverUrl: '', rating: 5 },
    ); // Ensure the last empty object is included
  });
});
