import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const aut = window.localStorage.getItem('token');
    if (aut) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
