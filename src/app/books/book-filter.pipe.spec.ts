import { Book } from './book';
import { BookFilterPipe } from './book-filter.pipe';

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

describe('BookFilterPipe', () => {
  let pipe: BookFilterPipe;

  beforeEach(() => {
    pipe = new BookFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('works with an empty book list', () => {
    const books: Book[] = [];
    const filterValue = 'test';

    const result = pipe.transform(books, filterValue);
    expect(result).toEqual([]);
  });

  it('works with null book list', () => {
    const result = pipe.transform(null as any, 'test');
    expect(result).toEqual([]);
  });

  it('works with undefined filter value', () => {
    const result = pipe.transform(TEST_BOOKS, undefined as any);
    expect(result).toEqual(TEST_BOOKS);
  });

  it('finds a book with the given title as substring', () => {
    const filterValue = 'Angular';

    const result = pipe.transform(TEST_BOOKS, filterValue);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(TEST_BOOKS[0]);
  });

  it('finds a book with the given title but different case', () => {
    const filterValue = 'angular';

    const result = pipe.transform(TEST_BOOKS, filterValue);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(TEST_BOOKS[0]);
  });

  it('finds multiple books matching the filter', () => {
    const filterValue = 'programming';

    const result = pipe.transform(TEST_BOOKS, filterValue);
    expect(result.length).toBe(1);
    expect(result).toContain(TEST_BOOKS[1]); // PHP Programming
  });

  it('returns empty array when no books match the filter', () => {
    const filterValue = 'nonexistent';

    const result = pipe.transform(TEST_BOOKS, filterValue);
    expect(result).toEqual([]);
  });

  it('handles books with empty titles', () => {
    const booksWithEmptyTitle = [
      { ...TEST_BOOKS[0], title: '' },
      TEST_BOOKS[1],
    ];

    const result = pipe.transform(booksWithEmptyTitle, 'php');
    expect(result.length).toBe(1);
    expect(result[0]).toEqual(TEST_BOOKS[1]);
  });
});
