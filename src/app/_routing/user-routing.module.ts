import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

// pages
import { HomeComponent } from "../pages/home/home.component";
import { ProfileComponent } from "../pages/profile/profile.component";
import { CoursesComponent } from "../pages/user/courses/courses.component";

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
      role: Role.user
    },
    children: [
      {
        path: '',
        component: CoursesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }