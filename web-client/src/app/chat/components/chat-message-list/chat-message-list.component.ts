import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/shared/models/chat-message.model';
import { ChatUser } from 'src/app/shared/models/chat-user.model';

@Component({
  selector: 'app-chat-message-list',
  templateUrl: './chat-message-list.component.html',
  styleUrls: ['./chat-message-list.component.scss']
})
export class ChatMessageListComponent implements OnInit {

  @Input()
  public messages: ChatMessage[];

  @Input()
  public user: ChatUser;

  constructor() { }

  ngOnInit() {
  }

}
