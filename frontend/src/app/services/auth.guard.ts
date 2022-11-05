import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
  constructor(private userService: UserService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url: string = state.url;
    return this.checkUser(next, url);
  }

  private checkUser(route: ActivatedRouteSnapshot, url: any): boolean {
    const userRole = this.userService.getRole();
    if (this.userService.isLoggedIn() && (route.data['roles'] && route.data['roles'].includes(userRole))) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
