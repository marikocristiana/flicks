import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { HeaderComponent } from './header/header.component';

// services
import { ServicesModule } from '../_services/services.module';

// material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

const MaterialModule = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialogModule,
  MatSelectModule
];

const GeneralModule = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    GeneralModule,
    MaterialModule,
    HeaderComponent
  ],
  imports: [
    GeneralModule,
    MaterialModule,
    ServicesModule
  ]
})
export class SharedModule { }
