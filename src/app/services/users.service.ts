import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = environment.baseURL;
  apiPath = '/api/users/';

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}${this.apiPath}`);
  }
  
  getUser(): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}${this.apiPath}`);
  }

  postUser(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.baseURL}${this.apiPath}`, user);
  }

  editUser(id: number, user: User): Observable<any>{
    return this.httpClient.put<any>(`${this.baseURL}${this.apiPath}${id}`, user);
  }

  deleteUser(id: number): Observable<User>{
    return this.httpClient.delete<User>(`${this.baseURL}${this.apiPath}${id}`);
  }
}
