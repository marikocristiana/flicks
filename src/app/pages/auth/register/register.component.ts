import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/_models/role';

// services
import { AuthService } from 'src/app/_services/auth/auth.service';

// validators
import { PasswordValidator } from 'src/app/_shared/validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = this.formBuilder.group(
    {
      email:    ['', [Validators.required, Validators.email]],
      role:     ['', [Validators.required]],
      password: ['', [Validators.required, PasswordValidator.valid]],
      confirm:  ['', [Validators.required, PasswordValidator.valid]]
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm.get('role')?.setValue('user');
  }

  public submitRegister() {
    if (this.registerForm.valid) {
      this.authService.register(
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value,
        this.registerForm.get('role')?.value
      );
    }
  }

}
