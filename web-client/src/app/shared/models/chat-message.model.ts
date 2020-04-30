import { ChatUser } from './chat-user.model';

export class ChatMessage {
  public id: string;
  public message: string;
  public timestamp: Date;
  public user: ChatUser;

  constructor(id: string, message: string, timestamp: Date, user: ChatUser){
    this.id = id;
    this.message = message;
    this.timestamp = timestamp;
    this.user = user;
  }
}