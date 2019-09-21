import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatMessageListComponent } from './components/chat-message-list/chat-message-list.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { ChatUserListComponent } from './components/chat-user-list/chat-user-list.component';
import { ChatUserComponent } from './components/chat-user/chat-user.component';

@NgModule({
  declarations: [
    ChatMessageComponent, 
    ChatMessageListComponent, 
    ChatRoomComponent,
    ChatUserListComponent, 
    ChatUserComponent
  ],
  imports: [
    ChatRoutingModule,
    CommonModule
  ]
})
export class ChatModule { }
