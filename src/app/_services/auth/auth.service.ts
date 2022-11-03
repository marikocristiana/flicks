import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, first, map, mergeMap } from 'rxjs';

// firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

// models
import { User } from 'src/app/_models/user';
import { Role } from 'src/app/_models/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData: any;

  constructor(
    private fireStore: AngularFirestore,
    private fireAuth:  AngularFireAuth,
    private router:    Router
  ) {
    this.userData = this.fireAuth.authState
    .pipe(
      mergeMap(
        (user: any) => {
          if (user) {
            this.setLocalStorage('user', user);
            return this.fireStore.doc<User>(`users/${user.email}`).valueChanges();
          }
          else {
            this.removeLocalStorage('user');
            return EMPTY;
          }
        }
      )
    );
  }

  public register(email: string, password: string, role: Role): Promise<void> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then(
      (result: any) => {
        if (result) {
          result.user['role'] = role;
          this.verification();
          this.setUserData(result.user);
        }
      }
    )
    .catch(
      (error) => { window.alert(error.message); }
    );
  }

  public verification(): Promise<void> {
    return this.fireAuth.currentUser
    .then(
      (user) => { user ? user.sendEmailVerification() : null; }
    )
    .then(
      () => { window.alert('Email verification sent! Please check you email.'); }
    );
  }

  public login(email: string, password: string): Promise<void> {
    return this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(
      (result: any) => {
        this.userData.pipe(first()).subscribe(
          (user: any) => {
            result.user['role']    = user.role;
            result.user['zipcode'] = user.zipcode;
            this.setUserData(result.user);
            this.router.navigate([result.user.role]);
          }
        );
      }
    )
    .catch(
      (error) => { window.alert(error.message); }
    );
  }

  public logout() {
    return this.fireAuth.signOut()
    .then(
      () => {
        this.removeLocalStorage('user');
        this.router.navigate(['login']);
      }
    );
  }

  public formatUser(user: any): User {
    const userData: User = {
      email:    user.email   ? user.email   : null,
      role:     user.role    ? user.role    : null,
      uid:      user.uid     ? user.uid     : null,
      zipcode:  user.zipcode ? user.zipcode : null,
      verified: user.emailVerified ? user.emailVerified : false
    };
    return userData;
  }

  public setUserData(user: any): Promise<void> {
    user = this.formatUser(user);
    return this.fireStore.doc(`users/${user.email}`).set(user, { merge: true });
  }

  public getLocalStorage(user: string): any {
    return JSON.parse(localStorage.getItem(user)!);
  }

  public setLocalStorage(user: string, data: any): void {
    localStorage.setItem(user, JSON.stringify(data));
  }

  public removeLocalStorage(user: string): void {
    localStorage.removeItem(user);
  }

}
