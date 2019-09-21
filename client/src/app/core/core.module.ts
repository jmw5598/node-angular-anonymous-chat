import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatService } from './services/chat.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ChatService
  ],
  exports: []
})
export class CoreModule { }
