import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      roles:    ['', [Validators.required]],
      password: ['', [Validators.required, PasswordValidator.valid]],
      confirm:  ['', [Validators.required, PasswordValidator.valid]]
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm.get('roles')?.setValue('user');
  }

  public submitRegister() {
    if (this.registerForm.valid) {
      this.authService.register(
        this.registerForm.get('email')?.value,
        this.registerForm.get('password')?.value,
        {
          user:  this.registerForm.get('roles')?.value.includes('user'),
          admin: this.registerForm.get('roles')?.value.includes('admin')
        }
      );
    }
  }

}
