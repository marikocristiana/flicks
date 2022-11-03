import { Component, OnInit } from '@angular/core';

// services
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  public submitLogout(): void {
    this.authService.logout();
  }

}
