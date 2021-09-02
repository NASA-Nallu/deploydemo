import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  userHasRole: any;
  constructor(private logserv: LoginService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.logserv.getCurrentUser().subscribe((message) => {
      console.log(this.userHasRole);
      this.userHasRole = message.role;
    });
    if (this.userHasRole) {
      return true;
    } else {
      return false;
    }
    // return true;
  }
}
