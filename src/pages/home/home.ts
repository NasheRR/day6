import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksProvider, Book } from '../../providers/books/books';
import { Subscription } from 'rxjs/Subscription';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  items: Book[];
  public suscription: Subscription;

  constructor(public navCtrl: NavController,
    public bookS: BooksProvider) {

  }

  ngOnInit(){
    this.suscription = this.bookS.getBooks().subscribe((data: Book[])=>{
      this.items = data;
      console.log(data);

    },(error)=>{
        console.log(error);
    });
  }

}
