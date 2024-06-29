import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseURL: string = environment.baseURL;
  apiPath = '/api/books/';

  constructor(private httpClient: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseURL}${this.apiPath}`);
  }

  getBook(): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseURL}${this.apiPath}`);
  }

  postBook(book: Book): Observable<Book>{
    return this.httpClient.post<Book>(`${this.baseURL}${this.apiPath}`, book);
  }

  editBook(id: number, book: Book): Observable<any>{
    return this.httpClient.put<any>(`${this.baseURL}${this.apiPath}${id}`, book);
  }

  deleteBook(id: number): Observable<Book>{
    return this.httpClient.delete<Book>(`${this.baseURL}${this.apiPath}${id}`);
  }
}
