import { Component, OnInit } from '@angular/core';
import Books from '../Books';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  books: Books[];

  constructor(private bs: BooksService,private router: Router) { }

  ngOnInit() {
    this.bs
      .getBooks()
      .subscribe((data: Books[]) => {
        this.books = data;
    });
  }
  deleteBook(id) {
    this.bs.deleteBook(id).subscribe(res => {
      console.log('Deleted');
      //this.router.navigate(['books']);
    });
  }
}