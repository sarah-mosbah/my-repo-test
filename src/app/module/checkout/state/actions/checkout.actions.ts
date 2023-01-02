import { Action, createAction, props } from "@ngrx/store";

export const booking = createAction(
    '[booking] booking',
    props<{payload: any }>()
);

export const bookingSuccess = createAction(
    '[booking] booking Success',
    props<{payload: any }>()
);

export const bookingFailure = createAction(
    '[booking] booking Failure',
    props<{payload: any }>()
);
  


export interface ActionWithPayload<T> extends Action {
    payload: T;
}