import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessage } from 'src/app/shared/models/chat-message.model';
import { ChatService } from 'src/app/core/services/chat.service';
import { ChatUser } from 'src/app/shared/models/chat-user.model';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  
  public user: ChatUser;
  public users: ChatUser[];
  public messages: ChatMessage[] = [];

  constructor(
    private _chatService: ChatService
  ) { }

  ngOnInit() {
    this._chatService.user.subscribe(user => this.user = user);
    this._chatService.users.subscribe(users => this.users = users);
    this._chatService.message.subscribe(message => this.messages.push(message));
  }

}
