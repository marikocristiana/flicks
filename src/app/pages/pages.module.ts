import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';

// pages
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './user/courses/courses.component';
import { CourseComponent } from './user/course/course.component';
import { ManagerComponent } from './admin/manager/manager.component';
import { UsersComponent } from './admin/users/users.component';

const AuthModule  = [
  RegisterComponent,
  LoginComponent,
  RecoverComponent
];

const UserModule  = [
  CoursesComponent,
  CourseComponent,
];

const AdminModule = [
  UsersComponent,
  ManagerComponent
];

@NgModule({
  declarations: [
    AuthModule,
    UserModule,
    AdminModule,
    HomeComponent,
    ProfileComponent
  ],
  imports: [SharedModule]
})
export class PagesModule { }
