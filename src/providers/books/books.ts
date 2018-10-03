import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

export interface Book {
  id?: number,
  title: string;
  language: string;
  edition: string;
  publisher: number;
}


@Injectable()
export class BooksProvider {

  public books: Book[];

  public urlLocal: string = 'http://9a0427b5.ngrok.io';

  constructor(public http: HttpClient) {
    console.log('Hello BooksProvider Provider');
  }

  getBooks(): Observable<Book[]> {
    return this.http.get(`${this.urlLocal}/books`) as Observable<Book[]>;
  }

  updateBook(id: number, body): Observable<Book[]> {
    let params = body;
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this.http.put( `${this.urlLocal}/books/${id}`, params, { headers: headers }) as Observable<Book[]>;
  }

  addBook(body): Observable<Book[]> {
    let params = body;
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post( `${this.urlLocal}/books`, params, { headers: headers }) as Observable<Book[]>;
  }

  deleteBook(id: number): Observable<Book[]> {
    return this.http.delete( `${this.urlLocal}/books/${id}`) as Observable<Book[]>;
  }



}
