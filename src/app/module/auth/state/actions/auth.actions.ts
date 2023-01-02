import { Action, createAction, props } from "@ngrx/store";
import { VerificationRequest } from "../../../models/login.interface";
import { UserAuth } from "../../models/userProfile";

export const login = createAction(
    '[login] login',
    props<{payload: {phone: string, countryCode: string} }>()
);

export const loginSuccess = createAction(
    '[login] login Success',
    props<{payload: {message: string} }>()
);

export const loginFailure = createAction(
    '[login] login Failure',
    props<{payload: any }>()
);

export const loginWithEmail = createAction(
    '[loginWithEmail] loginWithEmail',
    props<{payload: {email: string, password: string} }>()
);

export const loginWithEmailSuccess = createAction(
    '[loginWithEmail] loginWithEmail Success',
    props<{payload: UserAuth }>()
);

export const loginWithEmailFailure = createAction(
    '[loginWithEmail] loginWithEmail Failure',
    props<{payload: any }>()
);


export const verifyOrLoginWithPassword = createAction(
    '[verifyOrLoginWithPassword] verifyOrLoginWithPassword',
    props<{payload: VerificationRequest}>()
);

export const verifyOrLoginWithPasswordSuccess = createAction(
    '[verifyOrLoginWithPassword] verifyOrLoginWithPassword Success',
    props<{payload: UserAuth}>()
);

export const verifyOrLoginWithPasswordFailure = createAction(
    '[verifyOrLoginWithPassword] verifyOrLoginWithPassword Failure',
    props<{payload: any }>()
);
  

export const loginWithFacebook = createAction(
    '[loginWithFacebbok] login with Facebook ',
    props<{payload: {token: string}}>()
);

export const loginWithFacebookSuccess = createAction(
    '[loginWithFacebook] login with Facebook Success',
    props<{payload: UserAuth}>()
);

export const loginWithFacebookFailure = createAction(
    '[loginWithFacebook] login with Facebook  Failure',
    props<{payload: any }>()
);

export const reSendVerification = createAction(
    '[reSendVerification] resend verification ',
    props<{payload: {phone: string, countryCode: string} }>()
);

export const reSendVerificationSuccess = createAction(
    '[reSendVerification] resend verification Success',
    props<{payload: {message: string}}>()
);

export const reSendVerificationFailure = createAction(
    '[reSendVerification] resend verification  Failure',
    props<{payload: any }>()
);
  
  

export const loginWithApple = createAction(
    '[loginWithApple] login with Apple ',
    props<{payload: {token: string}}>()
);

export const loginWithAppleSuccess = createAction(
    '[loginWithApple] login with Apple Success',
    props<{payload: UserAuth}>()
);

export const loginWithAppleFailure = createAction(
    '[loginWithApple] login with Apple  Failure',
    props<{payload: any }>()
);

export interface ActionWithPayload<T> extends Action {
    payload: T;
}