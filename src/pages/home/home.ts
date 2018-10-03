import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksProvider, Book } from '../../providers/books/books';
import { Subscription } from 'rxjs/Subscription';
import {BookDetailsPage} from "../book-details/book-details";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  error: boolean = false;
  items: Book[];
  public suscription: Subscription;
  isLoading: boolean = true;

  constructor(public navCtrl: NavController,
    public bookS: BooksProvider) {

  }

  ngOnInit(){
    this.startArray()
  }

  startArray(){
    this.error = false;
    this.suscription = this.bookS.getBooks().subscribe((data: Book[])=>{
      this.items = data;
      console.log(data);
      this.isLoading = false;
    },(error)=>{
      this.error = true;
      console.log(error);
    });
  }

  nav(){
    this.navCtrl.push(BookDetailsPage);
  }

  navWithBook(b: Book){
    console.log(b);
    this.navCtrl.push(BookDetailsPage, {book: b});
  }

}
