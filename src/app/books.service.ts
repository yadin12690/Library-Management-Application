import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  uri = 'http://localhost:4000/books';

  constructor(private http: HttpClient) { }

  addBook(author_name, book_name, catalog_number, publication_date, cover_photo) {
    const obj = {
      author_name: author_name,
      book_name: book_name,
      catalog_number: catalog_number,
      publication_date: publication_date,
      cover_photo: cover_photo
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getBooks() {
    return this
      .http
      .get(`${this.uri}`);
  }

  editBooks(id) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }

  updateBooks(author_name, book_name, catalog_number, publication_date, cover_photo, id) {

    const obj = {
      author_name: author_name,
      book_name: book_name,
      catalog_number: catalog_number,
      publication_date: publication_date,
      cover_photo: cover_photo
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }


  deleteBook(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }


}
