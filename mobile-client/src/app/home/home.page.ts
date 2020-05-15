import { Component, OnInit } from '@angular/core';

import { ChatService } from '../core/services/chat.service';
import { ChatUser } from '../shared/models/chat-user.model';
import { ChatMessage } from '../shared/models/chat-message.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private _chatService: ChatService) {}

  ngOnInit() {
    const user: ChatUser = new ChatUser('jkdfjd9d9s0skdfjf', 'Jason', null);
    this._chatService.connect(user, '123');

    this._chatService.message
      .subscribe((message: ChatMessage) => console.log("New message", message));
  }
}
