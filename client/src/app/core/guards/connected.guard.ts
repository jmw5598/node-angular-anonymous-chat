import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from '../services/chat.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectedGuard implements CanActivate {

  private connected: boolean = true;

  constructor(
    private _chatService: ChatService,
    private _router: Router
   ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.connected) return true;
    this._router.navigate(['connect']);
    return false;
  }
  
}
