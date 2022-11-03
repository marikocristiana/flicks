import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// pages
import { ManagerComponent } from "../pages/admin/manager/manager.component";
import { UsersComponent } from "../pages/admin/users/users.component";
import { HomeComponent } from "../pages/home/home.component";
import { ProfileComponent } from "../pages/profile/profile.component";

// guard
import { AuthGuard } from "src/app/_guard/auth.guard";

// models
import { Role } from "src/app/_models/role";

const childRoutes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: Role.admin
    },
    children: [
      {
        path: 'manage',
        component: ManagerComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }