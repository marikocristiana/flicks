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

  public loginForm: FormGroup = this.formBuilder.group(
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

  public submitLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      );
    }
  }

}
