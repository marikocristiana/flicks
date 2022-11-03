import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public admin: boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.authService.userData.subscribe(
      (user: any) => {
        this.admin = user.role.includes('admin') ? true : false;
      }
    );
  }

  ngOnInit(): void { }

}
