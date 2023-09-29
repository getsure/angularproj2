import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book:any;
  constructor(private activatedRoute:ActivatedRoute, private bookSrvc:BooksService) { }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params['id']
    this.bookSrvc.getBook(id).subscribe(res => {
      this.book = res
    })
  }

}
