import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocketIoConfig, Socket } from 'ngx-socket-io';
import { ChatUser } from 'src/app/shared/models/chat-user.model';
import { ChatMessage } from 'src/app/shared/models/chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _socket: Socket;
  private _userSource: BehaviorSubject<ChatUser> = new BehaviorSubject<ChatUser>(null);
  private _usersSource: BehaviorSubject<ChatUser[]> = new BehaviorSubject<ChatUser[]>([]);
  private _messageSource: BehaviorSubject<ChatMessage> = new BehaviorSubject<ChatMessage>(null);

  public user: Observable<ChatUser> = this._userSource.asObservable();
  public users: Observable<ChatUser[]> = this._usersSource.asObservable();
  public message: Observable<ChatMessage> = this._messageSource.asObservable();

  constructor() {
    const user: ChatUser = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    this._userSource.next(user);
    if (user) this.connect(user);
  }

  connect(user: ChatUser) {
    const config: SocketIoConfig = { 
      url: 'http://192.168.1.46:3000', 
      options: { 
        query: { user: JSON.stringify(user) } }
      };
    this._socket = new Socket(config);
    localStorage.setItem('user', JSON.stringify(user));
    this._setupSocket();
  }

  disconnect() {
    console.log('disconnecting');
    localStorage.clear();
    this._socket.disconnect();
  }

  send(message: ChatMessage) {
    this._socket.emit('message', message);
  }

  private _setupSocket() {
    this._socket.on('received', message => this._messageSource.next(message));
    this._socket.on('user-list', users => this._usersSource.next(users));
  }

}
