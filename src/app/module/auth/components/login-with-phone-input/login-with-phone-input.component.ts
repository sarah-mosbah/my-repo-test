import { Country } from '@angular-material-extensions/select-country';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainPage } from '../../../../main.page';
import {  takeUntil } from 'rxjs';
import { AuthProvider } from '../../state/providers/auth.provider';

@Component({
  selector: 'login-with-phone-input',
  templateUrl: './login-with-phone-input.component.html',
  styleUrls: ['./login-with-phone-input.component.scss']
})
export class LoginWithPhoneInputComponent extends MainPage implements OnInit {

  @Output() emitVerificationNumber = new EventEmitter();
  @Input() loginForm!: FormGroup;
  @Input() isPasswordMode: boolean = false;
  isLoggedInWithPhoneNumber!: boolean;
  showPassword: boolean = false;
  
  constructor(private authProvider: AuthProvider) {
    super();
  }

  ngOnInit(): void {
    this.authProvider.selectLoginState$().pipe(takeUntil(this.destroyed$)).subscribe((value)=>this.isLoggedInWithPhoneNumber= value);
  }
  get countryCode() {
    return this.loginForm.get('countryCode');
  }
  get phoneNumber() {
    return this.loginForm.get('phoneNumber');
  }
  onCountrySelectedChange(country: Country) {
    if(country.alpha2Code !== 'EG') 
      this.phoneNumber?.setValidators(Validators.required);
    else 
      this.phoneNumber?.setValidators([Validators.required, Validators.pattern(/^1[0-2,5]{1}[0-9]{8}$/)])
    
    this.phoneNumber?.updateValueAndValidity();
  }

  resendVerification() {
    const countryCode = this.countryCode!.value.callingCode;
    this.authProvider.dispatchResendVerification(this.phoneNumber?.value, countryCode);
  }

  onVerificationNumberIsValid($event: any) {
    this.emitVerificationNumber.emit($event);
  }
}
