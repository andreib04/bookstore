import { Component } from '@angular/core';
import { Book } from '../../../models/book';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.scss'
})
export class EditBookComponent {
  // book: Book = {} as Book;

  // form: FormGroup = new FormGroup({
  //   title: new FormControl<string>('', [Validators.required]),
  //   author: new FormControl<string>('', [Validators.required]),
  //   description: new FormControl<string>('', [Validators.required]),
  //   price: new FormControl<string>('', [Validators.required]),
  // })

  // constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router, private location: Location){
  //   this.book.id = +route.snapshot.params['id'];

  //   this.booksService.getBook(this.book.id).subscribe(res => {
  //     this.form.controls['title'].setValue(res.title);
  //     this.form.controls['author'].setValue(res.author);
  //     this.form.controls['description'].setValue(res.description);
  //     this.form.controls['price'].setValue(res.price);
  //   });
  // }

  // editBook(){
  //   if(this.form.valid){
  //     this.book = {
  //       id: this.book.id,
  //       title: this.form.controls['title'].value,
  //       author: this.form.controls['author'].value,
  //       description: this.form.controls['description'].value,
  //       price: this.form.controls['price'].value,
  //     } as Book;

  //     this.booksService.editBook(this.book.id, this.book).subscribe(res => {
  //       console.log(res);
  //       this.location.back();
  //     })
  //   }
  // }
}
