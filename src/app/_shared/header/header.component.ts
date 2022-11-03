import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private user: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.userData.subscribe(
      (user: any) => {
        this.user = user;
      }
    );
  }

  ngOnInit(): void { }

  public submitLogout(): void {
    this.authService.logout();
  }

  public navigateHome(): void {
    this.router.navigate([this.user.role]);
  }

}
