import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ChatService } from './services/chat.service';
import { ConnectedGuard } from './guards/connected.guard';
import { DisconnectedGuard } from './guards/disconnected.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    ConnectedGuard,
    DisconnectedGuard
  ]
})
export class CoreModule { }
