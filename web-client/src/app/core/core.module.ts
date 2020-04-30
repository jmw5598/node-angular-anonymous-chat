import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatService } from './services/chat.service';
import { ConnectedGuard } from './guards/connected.guard';
import { DisconnectedGuard } from './guards/disconnected.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ChatService,
    ConnectedGuard,
    DisconnectedGuard
  ],
  exports: []
})
export class CoreModule { }
