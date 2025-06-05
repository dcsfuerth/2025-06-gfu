import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  standalone: false,
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent implements OnInit {
  public isbn = '';
  public book: Book | null = null;

  constructor(
    private route: ActivatedRoute,
    private bookDataService: BookDataService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.isbn = this.route.snapshot.params['isbn'];
    this.book = await this.bookDataService.getBook(this.isbn);
  }
}
