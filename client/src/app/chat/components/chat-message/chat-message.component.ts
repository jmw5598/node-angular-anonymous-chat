import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from 'src/app/shared/models/chat-message.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input()
  message: ChatMessage;

  constructor() { }

  ngOnInit() {
  }

}
