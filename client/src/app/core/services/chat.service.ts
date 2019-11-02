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
    const room: string = localStorage.getItem('room');
    const user: ChatUser = JSON.parse(localStorage.getItem('user'));
    
    this._userSource.next(user);
    if (user && room) this.connect(user, room);
  }

  connect(user: ChatUser, room: string) {
    const config: SocketIoConfig = { 
      url: 'http://localhost:3000', 
      options: { 
        query: { user: JSON.stringify(user), room: room } 
      }
    };
    this._socket = new Socket(config);
    this._setupSocket();
    this._userSource.next(user);
    localStorage.setItem('room', room);
    localStorage.setItem('user', JSON.stringify(user));
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
