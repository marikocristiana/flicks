import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

// services
import { AuthService } from 'src/app/_services/auth/auth.service';
import { ZipcodeService } from 'src/app/_services/zipcode/zipcode.service';

// validators
import { PasswordValidator } from 'src/app/_shared/validators/password.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: any;
  public address: any;

  public profileForm: FormGroup = this.formBuilder.group(
    {
      email:    [''],
      uid:      [''],
      zipcode:  [''],
      state:    [''],
      city:     [''],
      district: [''],
      street:   [''],
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private zipService:  ZipcodeService
  ) {
    this.authService.getUserData().subscribe(
      (user: any) => {
        this.user = user;
        this.profileForm.get('email')?.setValue(this.user.email);
        this.profileForm.get('uid')?.setValue(this.user.uid);
        if (this.user.zipcode) {
          this.profileForm.get('zipcode')?.setValue(this.user.zipcode);
          this.searchZipcode(this.user.zipcode);
        }
      }
    );
  }

  ngOnInit(): void { }

  public searchZipcode(zipcode: string): void {
    if (
      this.profileForm.get('zipcode')?.valid &&
      this.profileForm.get('zipcode')?.value
    ) {
      this.zipService.getAddress(zipcode).subscribe(
        (address: any) => {
          this.address = address;
          if (!address.erro) {
            this.profileForm.get('state')?.setValue(address.uf);
            this.profileForm.get('city')?.setValue(address.localidade);
            this.profileForm.get('district')?.setValue(address.bairro);
            this.profileForm.get('street')?.setValue(address.logradouro);
          }
        }
      );
    }
    else { this.address = null; }
  }

  public submitChanges() {
    if (
      this.profileForm.valid &&
      this.profileForm.dirty
    ) {
      this.user['zipcode'] = this.profileForm.get('zipcode')?.value;
      this.authService.setUserData(this.user).then(
        () => {
          window.alert('Profile changes saved sucessfully!');
        }
      );
    }
  }

}
