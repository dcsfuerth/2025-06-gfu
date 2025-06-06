import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

const BACKEND_URL = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root',
})
export class BookDataService {
  constructor(private httpClient: HttpClient) {}

  async getBooks(): Promise<Book[]> {
    const result = this.httpClient.get<Book[]>(BACKEND_URL);
    return await firstValueFrom(result);
  }

  async getBook(isbn: string): Promise<Book> {
    const result = this.httpClient.get<Book>(`${BACKEND_URL}/${isbn}`);
    return await firstValueFrom(result);
  }

  async deleteBook(isbn: string): Promise<Book[]> {
    await firstValueFrom(this.httpClient.delete<any>(`${BACKEND_URL}/${isbn}`));
    return await this.getBooks();
  }

  async saveBook(book: Book): Promise<Book[]> {
    await firstValueFrom(this.httpClient.post<Book>(BACKEND_URL, book));
    return await this.getBooks();
  }
}
