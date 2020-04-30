import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { ChatMessage } from 'src/app/shared/models/chat-message.model';
import { ChatService } from 'src/app/core/services/chat.service';
import { ChatUser } from 'src/app/shared/models/chat-user.model';

@Component({
  selector: 'app-chat-message-form',
  templateUrl: './chat-message-form.component.html',
  styleUrls: ['./chat-message-form.component.scss']
})
export class ChatMessageFormComponent implements OnInit {

  public form: FormGroup;
  public user: ChatUser;

  constructor(
    private _chatService: ChatService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this._chatService.user.subscribe(user => this.user = user);
    this.form = this._formBuilder.group({
      message: ['', [Validators.required]]
    });
  }

  send(message: ChatMessage) {
    message.id = uuid();
    message.timestamp = new Date();
    message.user = this.user;
    this._chatService.send(message);
    this.form.reset();
  }

}
