import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RecoverComponent } from './pages/auth/recover/recover.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/user/courses/courses.component';
import { ManageCoursesComponent } from './pages/admin/manage-courses/manage-courses.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';

// guards
import { AuthGuard } from './_guard/auth.guard';

// models
import { Role } from './_models/role';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch:  'full'
  },
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
  },
  {
    path: 'user',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: Role.user
    },
    children: [
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: Role.admin
    },
    children: [
      {
        path: 'manage',
        component: ManageCoursesComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'users',
        component: ManageUsersComponent
      }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
