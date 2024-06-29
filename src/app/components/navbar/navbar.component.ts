import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LoginServiceService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public loginService: LoginServiceService
    ,@Inject(PLATFORM_ID) private platformId: Object
  ){
    if(isPlatformBrowser(this.platformId)){
      if(localStorage.getItem('token')){
        this.loginService.setLogIn(true);
      }
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.loginService.setLogIn(false);
  }
}
