import { Component, OnInit, Input } from '@angular/core';
import { ChatUser } from 'src/app/shared/models/chat-user.model';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.scss']
})
export class ChatUserComponent implements OnInit {

  @Input()
  public user: ChatUser;

  constructor() { }

  ngOnInit() {
  }

}
