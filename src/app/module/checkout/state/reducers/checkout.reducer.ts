import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on, createSelector } from '@ngrx/store';
import * as fromCheckoutActions from '../actions/checkout.actions';
export const checkoutFeatureKey = 'checkoutFeatureKey';

export interface FeatureState {
    bookingError?: HttpErrorResponse;
    booking: any;
}

export const selectState  = (state: FeatureState) => state;
export const selectBooking = createSelector(
    selectState,
    (state: FeatureState) => state.booking,
);

export const initialState: FeatureState = {
    bookingError: {} as HttpErrorResponse,
    booking: {}
}


const checkOutReducer = createReducer(
    initialState,
    on(fromCheckoutActions.booking, (state, action)=> ({...state, bookingError: undefined})),
    on(fromCheckoutActions.bookingSuccess, (state, action)=> ({...state, booking: action.payload})),
    on(fromCheckoutActions.bookingFailure, (state, action)=> ({...state, bookingError: action.payload})),
)

export function reducer(state: FeatureState | undefined, action: Action) {        
    return checkOutReducer(state, action);
}
