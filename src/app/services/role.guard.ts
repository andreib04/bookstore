import { Injectable } from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, GuardResult, MaybeAsync} from '@angular/router';
import { LoginServiceService } from "./login.service";

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate{
    constructor(private loginService: LoginServiceService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const expectedRole = route.data['expectedRole'];
        if(this.loginService.isLoggedIn() && this.loginService.hasRole(expectedRole)){
            return true;
        }else{
            this.router.navigate(['/home']);
            return false;
        }
    }
}