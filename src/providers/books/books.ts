import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

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

  public urlLocal: string = 'http://9a0427b5.ngrok.io/';

  constructor(public http: HttpClient) {
    console.log('Hello BooksProvider Provider');
  }

}
