import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectedGuard } from 'src/app/core/guards/connected.guard';
import { DisconnectedGuard } from './core/guards/disconnected.guard';

const routes: Routes = [
  {
    path: 'chat',
    canActivate: [ConnectedGuard],
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'connect',
    canActivate: [DisconnectedGuard],
    loadChildren: () => import('./connect/connect.module').then(m => m.ConnectModule)
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
