import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private bs: BooksService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      author_name: ['', Validators.required ],
      book_name: ['', Validators.required ],
      catalog_number: ['', Validators.required ],
      publication_date:['',Validators.required],
      cover_photo:['',Validators.required]
    });
  }

  addBook(author_name, book_name, catalog_number,publication_date,cover_photo) {
    this.bs.addBook(author_name, book_name, catalog_number,publication_date,cover_photo);
  }


  ngOnInit() {
  }

}
