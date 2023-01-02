import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { UserAuth } from '../../models/userProfile';
import * as fromAuthActions from '../actions/auth.actions';
export const authFeatureKey = 'authFeatureKey';

export interface FeatureState {
    isLoggedInWithPhoneNumber: boolean;
    userProfile?: UserAuth;
    loginError: any;
}
export interface ModuleState {
    authFeatureKey: FeatureState;
}
export const selectFeature  = (state: ModuleState) => state.authFeatureKey;
export const selectIsLoggedInWithPhoneNumber = createSelector(
    selectFeature,
    (state: FeatureState) => state.isLoggedInWithPhoneNumber
);

export const selectUserProfile = createSelector(
    selectFeature,
    (state: FeatureState) => state.userProfile
);
export const selectLoginError = createSelector(
    selectFeature,
    (state: FeatureState) => state.loginError,
);
export const initialState: FeatureState = {
    isLoggedInWithPhoneNumber: false,
    userProfile: undefined,
    loginError: ''
}


const authReducer = createReducer(
    initialState,
    on(fromAuthActions.login, (state) => ({...state, loginError: undefined, isLoggedInWithPhoneNumber: false})),
    on(fromAuthActions.loginSuccess, (state) => ({...state, loginError: undefined, isLoggedInWithPhoneNumber: true})),
    on(fromAuthActions.loginFailure, (state, error) => ({...state, loginError: error})),

    on(fromAuthActions.loginWithEmail, (state) => ({...state, loginError: undefined, userProfile: undefined})),
    on(fromAuthActions.loginWithEmailSuccess, (state, action) => ({...state, loginError: undefined, userProfile: action.payload})),
    on(fromAuthActions.loginWithEmailFailure, (state, error) => ({...state, loginError: error})),

    on(fromAuthActions.verifyOrLoginWithPassword, (state) => ({...state, loginError: undefined, userProfile: undefined})),
    on(fromAuthActions.verifyOrLoginWithPasswordSuccess, (state, action) => ({...state, loginError: undefined, userProfile: action.payload})),
    on(fromAuthActions.verifyOrLoginWithPasswordFailure, (state, error) => ({...state, loginError: error})),

    on(fromAuthActions.loginWithFacebook, (state) => ({...state, loginError: undefined, userProfile: undefined})),
    on(fromAuthActions.loginWithFacebookSuccess, (state, action) => ({...state, loginError: undefined, userProfile: action.payload})),
    on(fromAuthActions.loginWithFacebookFailure, (state, error) => ({...state, loginError: error})),
)

export function reducer(state: FeatureState | undefined, action: Action) {        
    return authReducer(state, action);
}
