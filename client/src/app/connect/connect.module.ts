import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConnectComponent } from './pages/connect/connect.component';
import { ConnectRoutingModule } from './connect-routing.module';

@NgModule({
  declarations: [
    ConnectComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConnectModule { }
