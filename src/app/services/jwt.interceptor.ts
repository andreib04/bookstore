import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginServiceService } from "./login.service";
import { environment } from '../../environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    constructor(private loginService: LoginServiceService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        const token = localStorage.getItem('token');
        const isLoggedIn = !!token;
        const isApiURL = request.url.startsWith(environment.baseURL);

        if(isLoggedIn && isApiURL){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}