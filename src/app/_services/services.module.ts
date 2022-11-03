import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

// environment
import { environment } from '../../environments/environment';

// services
import { AuthService } from './auth/auth.service';
import { CepService } from './cep/cep.service';

const FirebaseModule = [
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFirestoreModule,
  AngularFireStorageModule,
  AngularFireDatabaseModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FirebaseModule
  ],
  providers: [
    AuthService,
    CepService
  ]
})
export class ServicesModule { }
