import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pages
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './user/courses/courses.component';
import { ManageCoursesComponent } from './admin/manage-courses/manage-courses.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { SharedModule } from '../_shared/shared.module';

const AuthModule  = [
  RegisterComponent,
  LoginComponent,
  RecoverComponent
];

const UserModule  = [
  CoursesComponent
];

const AdminModule = [
  ManageCoursesComponent,
  ManageUsersComponent
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
