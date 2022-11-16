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
import { SearchComponent } from './search/search.component';
import { MatChipsModule } from '@angular/material/chips';

const MaterialModule = [
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialogModule,
  MatSelectModule,
  MatChipsModule
];

const GeneralModule = [
  CommonModule,
  RouterModule,
  HttpClientModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  exports: [
    GeneralModule,
    MaterialModule,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    GeneralModule,
    MaterialModule,
    ServicesModule
  ]
})
export class SharedModule { }
