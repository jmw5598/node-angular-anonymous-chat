import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ChatUser } from 'src/app/shared/models/chat-user.model';

@Injectable({
  providedIn: 'root'
})
export class ConnectedGuard implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: ChatUser = JSON.parse(localStorage.getItem('user'));
    if (user) return true;
    this._router.navigate(['connect']);
    return true;
  }
  
}
