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
      //      return titel.indexOf(filterValue) >= 0;
      return titel.indexOf(filterValue) + 1;
    });

    // indexof = -1 =>False => 0 => false
    // indexof = 0...21212 => true => 1...32323232 /=> true

    return result;
  }
}
