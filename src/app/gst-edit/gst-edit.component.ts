import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {

  books: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: BooksService,
    private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      author_name: ['', Validators.required],
      book_name: ['', Validators.required],
      catalog_number: ['', Validators.required],
      publication_date:['', Validators.required],
      cover_photo:['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.editBooks(params['id']).subscribe(res => {
        this.books = res;
      });
    });
  }
  updateBooks(author_name, book_name, catalog_number,publication_date,cover_photo) {
    this.route.params.subscribe(params => {
      this.bs.updateBooks(author_name, book_name, catalog_number,publication_date,cover_photo, params['id']);
      this.router.navigate(['books']);
    });
  }
}
