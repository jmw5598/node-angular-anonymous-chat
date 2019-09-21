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
    this._chatService.connect(user);
    this._router.navigate(['chat']);
  }

}
