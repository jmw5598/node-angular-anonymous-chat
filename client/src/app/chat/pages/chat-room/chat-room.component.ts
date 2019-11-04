import { Component, OnInit, HostListener,  } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from 'src/app/shared/models/chat-message.model';
import { ChatService } from 'src/app/core/services/chat.service';
import { ChatUser } from 'src/app/shared/models/chat-user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  
  public user: ChatUser;
  public users: ChatUser[];
  public messages: ChatMessage[] = [];

  public showMobileMenu: boolean = false;

  constructor(
    private _chatService: ChatService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._chatService.user.subscribe(user => this.user = Object.assign({}, user));
    this._chatService.users.subscribe(users => this.users = users);
    this._chatService.message.subscribe(message => this.messages.push(message));
  }

  disconnect() {
    this._chatService.disconnect();
    this._router.navigate(['connect']);
  }

  toggle() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width: number = event.target.innerWidth;
    if (width > 835)
      this.showMobileMenu = true;
    else
      this.showMobileMenu = false;

  }

}
