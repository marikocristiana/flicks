import { Injectable } from '@angular/core';

// firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

// models
import { User } from '../../_models/user';
import { Roles } from 'src/app/_models/roles';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireStore: AngularFirestore,
    private fireAuth:  AngularFireAuth,
    private router:    Router
  ) { }

  public register(email: string, password: string, roles: Roles): Promise<void> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then(
      (result: any) => {
        if (result) {
          result.user['roles'] = roles;
          this.sendVerification();
          this.setUserData(result.user);
        }
      }
    )
    .catch(
      (error) => { window.alert(error.message); }
    );
  }

  public sendVerification(): Promise<void> {
    return this.fireAuth.currentUser
    .then(
      (user) => { user ? user.sendEmailVerification() : null; }
    )
    .then(
      () => { window.alert('Email verification sent! Please check you email.'); }
    );
  }

  public formatUserData(user: any): User {
    const userData: User = {
      email:    user.email   ? user.email   : null,
      roles:    user.roles   ? user.roles   : null,
      uid:      user.uid     ? user.uid     : null,
      zipcode:  user.zipcode ? user.zipcode : null,
      verified: user.emailVerified ? user.emailVerified : false
    };
    return userData;
  }

  public setUserData(user: any): Promise<void> {
    user = this.formatUserData(user);
    return this.fireStore.doc(`users/${user.email}`).set(user, { merge: true });
  }
  
}
