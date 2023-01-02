import { Action, createAction, props } from "@ngrx/store";

export const setSearchKey = createAction(
    '[filter] set search',
    props<{payload: string }>()
);


export interface ActionWithPayload<T> extends Action {
    payload: T;
}