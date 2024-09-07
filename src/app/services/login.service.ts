import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserLogin } from '../models/userLogin';
import { Token } from '../models/token';
import {JwtHelperService} from '@auth0/angular-jwt'
import { User } from '../models/user';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isLoggedIn = false;
  baseURL: string = environment.baseURL;
  apiPath = '/api/login';
  private jwtHelper = new JwtHelperService();

  constructor(private httpClient: HttpClient) {}

  login(userLogin: UserLogin): Observable<Token>{
    return this.httpClient.post<Token>(`${this.baseURL}${this.apiPath}`, userLogin);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.setLogIn(false);
  }

  get currentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user): null;
  }


   hasRole(role: string): boolean{
    const user = this.currentUser;
    return user && user.role === role;
   }

   setLogIn(isLoggedIn: boolean){
    this.isLoggedIn = isLoggedIn;
   }
}
