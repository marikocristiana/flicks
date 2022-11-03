import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// pages
import { LoginComponent } from "../pages/auth/login/login.component";
import { RecoverComponent } from "../pages/auth/recover/recover.component";
import { RegisterComponent } from "../pages/auth/register/register.component";

const childRoutes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'recover',
        component: RecoverComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }