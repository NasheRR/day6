import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksProvider, Book } from "../../providers/books/books";
import { MessagesService } from '../../services/Messages';
import { HomePage } from '../home/home';



@Component({
  selector: 'book-details',
  templateUrl: 'book-details.html'
})
export class BookDetailsPage implements OnInit {
    public book:Book;
    public form: FormGroup;
    public submitting: boolean = false

  constructor(public navCtrl: NavController, 
            private formBuilder: FormBuilder,
            private navParam: NavParams,
            private booksProvider: BooksProvider,
            private messagesService: MessagesService,
            private alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
        title: ['', Validators.required],
        language: ['', Validators.required],
        edition: ['', Validators.required],
        publisher: ['', Validators.required]
      });
        this.book = this.navParam.get('book');
      
      if (this.book){
          this.form.patchValue(this.book);
      }
  }

  formSubmitted(){
    this.submitting = true  
    this.booksProvider.addBook(this.form.value).subscribe(() => {
      this.messagesService.newToast('New book added!')
      this.submitting = false
    })
  }

  deleteBook() {
    this.alertCtrl.create({
      title: 'Ei',
      subTitle: 'Vas a borrar algo',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Go',
        handler: () => {
          this.booksProvider.deleteBook(this.book.id).subscribe(item => {
            this.navCtrl.setRoot(HomePage)
          })
        }
      }]
    })
    .present()

  }

}
