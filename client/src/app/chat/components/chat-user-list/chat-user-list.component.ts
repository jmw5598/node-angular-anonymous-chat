import { Component, OnInit, Input } from '@angular/core';
import { ChatUser } from 'src/app/shared/models/chat-user.model';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.scss']
})
export class ChatUserListComponent implements OnInit {

  @Input()
  public users: ChatUser[];

  constructor() { }

  ngOnInit() {
  }

}
