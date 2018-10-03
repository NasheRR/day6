import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksProvider, Book } from "../../providers/books/books";


@Component({
  selector: 'book-details',
  templateUrl: 'book-details.html'
})
export class BookDetailsPage implements OnInit {
    public book:Book;
    public form: FormGroup;
    public submittedValues = {};

  constructor(public navCtrl: NavController, 
            private formBuilder: FormBuilder,
            private navParam: NavParams) {
  }

  ngOnInit(){
    this.form = this.formBuilder.group({
        title: ['', Validators.required],
        language: ['', Validators.required],
        edition: ['', Validators.required],
        publisher: ['', Validators.required]
      });
        this.book = this.navParam.get('item');
      
      if (this.book){
          this.form.patchValue(this.book);
      }
  }

  formSubmitted(){
    this.submittedValues = this.form.value;

  }

}
