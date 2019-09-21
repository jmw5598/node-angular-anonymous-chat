import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectedGuard } from 'src/app/core/guards/connected.guard';

const routes: Routes = [
  {
    path: 'chat',
    canActivate: [ConnectedGuard],
    loadChildren: './chat/chat.module#ChatModule'
  },
  {
    path: 'connect',
    loadChildren: './connect/connect.module#ConnectModule'
  },
  {
    path: '**',
    redirectTo: 'chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
