import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { first, map } from 'rxjs';
import { AuthService } from '../_services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    
    this.user = await this.userData();
    
    if (
      !this.user.verified
    ) {
      window.alert('Please verify your email and try again!');
      this.router.navigate(['login']);
      return false;
    }

    if (
      !this.user.role.includes(route.data['role'])
    ) {
      window.alert('You do not have permission to see this page!');
      this.router.navigate([this.user.role]);
      return false;
    }

    return true;
  }

  private async userData(): Promise<any> {
    return this.authService.userData.pipe(
      first(),
      map(
        (user: any) => {
          return user ? user : null;
        }
      )
    ).toPromise();
  }

}
