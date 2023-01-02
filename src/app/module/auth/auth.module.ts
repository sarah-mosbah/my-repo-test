import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login-page/login-page.component';
import { MatDividerModule } from '@angular/material/divider';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromFeatureState from "./state/reducers/auth.reducer";
import { AuthEffects } from './state/effects/auth.effects';
import { LoginFormComponent } from './components/login-form-component/login-form-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MobileOtpInputComponent } from './components/mobile-otp-input/mobile-otp-input.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginWithPhoneInputComponent } from './components/login-with-phone-input/login-with-phone-input.component';
import { LoginWithEmailComponent } from './components/login-with-email/login-with-email.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import {  SocialLoginModule } from 'angularx-social-login';
@NgModule({
  declarations: [
    LoginPage,
    LoginFormComponent,
    MobileOtpInputComponent,
    LoginWithPhoneInputComponent,
    LoginWithEmailComponent,
    PasswordInputComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectCountryModule,
    ReactiveFormsModule,
    SharedModule,
    MatIconModule,
    SocialLoginModule,
    StoreModule.forFeature(fromFeatureState.authFeatureKey, fromFeatureState.reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [ ]
})
export class AuthModule { }
