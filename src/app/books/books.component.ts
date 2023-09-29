import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:any = []

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(res => this.books = res)
  }

}
