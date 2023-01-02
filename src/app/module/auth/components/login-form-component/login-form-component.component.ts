import { Country } from '@angular-material-extensions/select-country';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainPage } from '../../../../main.page';
import { environment } from '../../../../../../src/environments/environment';
import { skip, take, takeUntil } from 'rxjs';
import { VerificationRequest } from '../../../models/login.interface';
import { AuthProvider } from '../../state/providers/auth.provider';
declare var FB: any;
declare var AppleID: any;

@Component({
  selector: 'login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.scss']
})
export class LoginFormComponent extends MainPage implements OnInit {
  loginForm!: FormGroup;
  isVerified!: boolean;
  isPasswordMode: boolean = false;
  disableVerify: boolean = true;

  otpValue: any;
  isEmailMode:  boolean = false;
  isLoggedInWithPhoneNumber: boolean = false;
  errorMessage: any;
  constructor(private formBuilder: FormBuilder, 
    private authProvider: AuthProvider, 
    private changeRef: ChangeDetectorRef) { 
    super();
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : environment.facebookId,
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };
    (function(d, s, id){
       let js: any =  d.getElementsByTagName(s)[0];
       let fjs: any = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      countryCode: new FormControl({alpha2Code: "EG"} as Country, Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^1[0-2,5]{1}[0-9]{8}$/)]),
      password: new FormControl('', []),
      email: new FormControl('', [])
    });
    this.authProvider.selectLoginError$().pipe(takeUntil(this.destroyed$)).subscribe((error) => {
      if(!error) {
        this.errorMessage = ''
        return;
      };
      this.errorMessage= error.error.message
    })
  }

  private submitSecondLoginStep(verificationData: VerificationRequest) {
    this.authProvider.dispatchVerifyAccount(verificationData);
    this.authProvider.selectUserProfile$()
      .pipe(skip(1), take(2)).subscribe((value)=> {
        if(value) this.isVerified = true;
        else this.isVerified = false;
      });
  }
 
  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.loginForm.get('email');
  }
  get countryCode() {
    return this.loginForm.get('countryCode');
  }
  get phoneNumber() {
    return this.loginForm.get('phoneNumber');
  }
 
  onIsEmailMode() {
    if(this.isEmailMode) {
      this.phoneNumber?.setValidators([]);
      this.countryCode?.setValidators([]);
      this.email?.setValidators([Validators.required, Validators.pattern( /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i)]);
      this.password?.setValidators([Validators.required]);
      this.phoneNumber?.updateValueAndValidity();
      this.email?.updateValueAndValidity();
      this.password?.updateValueAndValidity();
      this.countryCode?.updateValueAndValidity()
    } else {
      this.password?.setValidators([]);
      this.email?.setValidators([]);
      this.countryCode?.setValidators([Validators.required]);
      this.phoneNumber?.setValidators([Validators.required]);
      this.phoneNumber?.updateValueAndValidity();
      this.email?.updateValueAndValidity();
      this.password?.updateValueAndValidity();
      this.countryCode?.updateValueAndValidity();
    }
  }

  login() {
    const {callingCode} = this.countryCode!.value;
    this.authProvider.dispatchLogin(this.phoneNumber?.value, callingCode);
    this.authProvider.selectLoginState$().pipe(skip(1), take(2)).subscribe((value)=>this.isLoggedInWithPhoneNumber= value);
  }
  loginWithEmail() {
    const email = this.email?.value;
    const password = this.password?.value;
    this.authProvider.dispatchLoginWithEmail(email, password);
  }

  onVerificationNumberEmitted($event: any) {
    this.otpValue = $event.value;
    this.disableVerify = !$event.valid;
  }

  verify() {
    const {callingCode} = this.countryCode!.value;
    const verificationData: VerificationRequest = {
      phone: this.phoneNumber?.value,
      countryCode: callingCode,
      verificationCode: this.otpValue
    };
    this.submitSecondLoginStep(verificationData);
  }

  setPasswordMode() {
    this.isPasswordMode = true;
    this.changeRef.detectChanges();
    this.password?.setValidators(Validators.required);
    this.password?.updateValueAndValidity();
  }

  loginWithPassword() {
    const {callingCode} = this.countryCode!.value;
    const verificationData: VerificationRequest = {
      phone: this.phoneNumber?.value,
      countryCode: callingCode,
      password: this.password?.value
    };
    this.submitSecondLoginStep(verificationData);
  }

  loginWithFacebook() {
    FB.login((response: any)=>{
      if (response.authResponse){
        const {accessToken} = response.authResponse;
        this.authProvider.dispatchLoginWithFacebook(accessToken);
      } else {
        this.errorMessage= 'Error Occured While login via Facebook'
      }
    });
  }

  async loginWithApple() {
    try {
      AppleID.auth.init({
                clientId : 'com.checkmeweb',
                scope : 'name email',
                redirectURI : 'http://localhost:4200/login',
                state : 'init',
                nonce : 'test',
                usePopup : true //or false defaults to false
            });
      const data = await AppleID.auth.signIn();
      if(data.authorization.id_token) {
        
      }
      
    } catch (error) {
      console.log(error)
      //handle error.
    }
  }

  

}
