import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:  'full',
  },
  {
    path: '',
    loadChildren: () => import('./auth-routing.module').then(
      routes => routes.AuthRoutingModule
    )
  },
  {
    path: 'user',
    loadChildren: () => import('./user-routing.module').then(
      routes => routes.UserRoutingModule
    )
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin-routing.module').then(
      routes => routes.AdminRoutingModule
    )
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
