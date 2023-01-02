import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as fromReducer from '../reducers/auth.reducer';
import * as fromActions from '../actions/auth.actions';
import { Observable } from "rxjs";
import { VerificationRequest } from "../../../models/login.interface";
import { UserAuth } from "../../models/userProfile";
@Injectable({
    providedIn: 'root'
})
export class AuthProvider {

  constructor(private store: Store<fromReducer.ModuleState>) {
  }

  public dispatchLogin(phone: string, countryCode: string) {
    this.store.dispatch(fromActions.login({payload:{phone, countryCode}}));
  }

  public dispatchVerifyAccount(verificationData: VerificationRequest) {
    this.store.dispatch(fromActions.verifyOrLoginWithPassword({payload:verificationData}));
  }
  public dispatchLoginWithEmail(email: string, password: string) {
    this.store.dispatch(fromActions.loginWithEmail({payload: {email, password}}));
  }

  public dispatchLoginWithFacebook(token: string) {
    this.store.dispatch(fromActions.loginWithFacebook({payload: {token}}));
  }
  public dispatchResendVerification(phone: string, countryCode: string) {
    this.store.dispatch(fromActions.reSendVerification({payload:{phone, countryCode}}));
  }


  public selectLoginState$(): Observable<boolean> {
    return this.store.pipe(select(fromReducer.selectIsLoggedInWithPhoneNumber));
  }

  public selectUserProfile$(): Observable<UserAuth | undefined> {
    return this.store.pipe(select(fromReducer.selectUserProfile));
  }

  public selectLoginError$(): Observable<any> {
    return this.store.pipe(select(fromReducer.selectLoginError));
  }

}