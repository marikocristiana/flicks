import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { HeaderComponent } from './header/header.component';

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
import { RouterModule } from '@angular/router';

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
  RouterModule
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
    MaterialModule
  ]
})
export class SharedModule { }
