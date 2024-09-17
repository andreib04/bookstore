import { Component } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { Book } from '../../../models/book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrl: './book-management.component.scss'
})
export class BookManagementComponent {
  books: Book[] = [];

  constructor(private bookService: BooksService, private location: Location){
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res;
    });
  }

  // deleteBook(){
  //   this.bookService.deleteBook(this.book.id).subscribe(res => {
  //     this.location.back();
  //   })
  // }
}
