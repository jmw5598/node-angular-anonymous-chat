import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ChatUser } from 'src/app/shared/models/chat-user.model';
import { ChatService } from 'src/app/core/services/chat.service';

import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _chatService: ChatService,
    private _formBuilder: FormBuilder,
    public _router: Router
  ) { }

  ngOnInit() {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  connect(user: ChatUser) {
    user.id = uuid();
    //user.color = this._generateRandomColor();
    this._chatService.connect(user);
    this._router.navigate(['chat']);
  }

  private _generateRandomColor(): string {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

}
