import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

// services
import { AuthService } from 'src/app/_services/auth/auth.service';

// validators
import { PasswordValidator } from 'src/app/_shared/validators/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public profileForm: FormGroup = this.formBuilder.group(
    {
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, PasswordValidator.valid]],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void { }

  public submitLogin() {
    if (this.profileForm.valid) {
      this.authService.login(
        this.profileForm.get('email')?.value,
        this.profileForm.get('password')?.value
      );
    }
  }

}
