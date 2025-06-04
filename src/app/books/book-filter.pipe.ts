import { Pipe, PipeTransform } from '@angular/core';
import { Book } from './book';

@Pipe({
  name: 'bookFilter',
  standalone: false,
})
export class BookFilterPipe implements PipeTransform {
  // (books | bookFilter: filterValue)

  transform(books: Book[], filterValue: string): Book[] {
    //
    filterValue = (filterValue || '').toLocaleLowerCase();
    books = books || [];

    const result = books.filter((book: Book) => {
      const titel = (book.title || '').toLocaleLowerCase();
      return titel.indexOf(filterValue) >= 0;
    });

    return result;
  }
}
