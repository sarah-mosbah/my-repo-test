import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of } from "rxjs";
import { AuthService } from "../../services/auth.service";
import * as fromAuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: AuthService) {  
    }

    login$ = createEffect(
      () => this.actions$.pipe(
        ofType(fromAuthActions.login.type),
        concatMap(
         ( payload: any )=> {
            const {phone, countryCode } = payload.payload;
            return this.authService.loginWithPhoneNumber$(phone, countryCode)
            .pipe(
            map(
              (response: any) => {
               return fromAuthActions.loginSuccess({ payload: response })
              }),
              catchError((error) => of(fromAuthActions.loginFailure(error)))
            )
          }
        )
      )
    );

    verify$ = createEffect(
      () => this.actions$.pipe(
        ofType(fromAuthActions.verifyOrLoginWithPassword.type),
        concatMap(
         ( payload: any )=> {
            return this.authService.verifyPhoneNumber$(payload.payload)
            .pipe(
            map(
              (response: any) => {
               return fromAuthActions.verifyOrLoginWithPasswordSuccess({ payload: response })
              }),
              catchError((error) => of(fromAuthActions.verifyOrLoginWithPasswordFailure(error)))
            )
          }
        )
      )
    );
    resendVerification$ = createEffect(
      () => this.actions$.pipe(
        ofType(fromAuthActions.reSendVerification.type),
        concatMap(
         ( payload: any )=> {
            const {phone, countryCode } = payload.payload;
            return this.authService.resendVerificationCode$(phone, countryCode)
            .pipe(
            map(
              (response: any) => {
               return fromAuthActions.reSendVerificationSuccess({ payload: response })
              }),
              catchError((error) => of(fromAuthActions.reSendVerificationFailure(error)))
            )
          }
        )
      )
    );

    loginWithEmail$ = createEffect(
      () => this.actions$.pipe(
        ofType(fromAuthActions.loginWithEmail.type),
        concatMap(
         ( payload: any )=> {
            const { email, password } = payload.payload;
            return this.authService.loginWithEmail$(email, password)
            .pipe(
            map(
              (response: any) => {
               return fromAuthActions.loginWithEmailSuccess({ payload: response })
              }),
              catchError((error) => of(fromAuthActions.loginWithEmailFailure(error)))
            )
          }
        )
      )
    );

    loginWithFacebook$ = createEffect(
      () => this.actions$.pipe(
        ofType(fromAuthActions.loginWithFacebook.type),
        concatMap(
         ( payload: any )=> {
            return this.authService.loginWithFacebook$(payload.payload.token)
            .pipe(
            map(
              (response: any) => {
               return fromAuthActions.loginWithFacebookSuccess({ payload: response })
              }),
              catchError((error) => of(fromAuthActions.loginWithFacebookFailure(error)))
            )
          }
        )
      )
    );
    
}