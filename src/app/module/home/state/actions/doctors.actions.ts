import { Action, createAction, props } from "@ngrx/store";
import { FilterOptions } from "../../../shared/models/filterOptions.interface";
import { SelectInput } from "../../../shared/models/selectInput.interface";
import { SelectInputResponse } from "../../../shared/models/selectInput.response";

export const getDoctors = createAction(
    '[get doctors] get doctors',
    props<{payload: FilterOptions }>()
);

export const getDoctorsSuccess = createAction(
    '[get doctors] get doctors Success',
    props<{payload: any }>()
);

export const getDoctorsFailure = createAction(
    '[get doctors] get doctors Failure',
    props<{payload: any }>()
);
  

export const getDoctorsSpecialities = createAction(
    '[get doctors] get doctors specialities'
);

export const getDoctorsSpecialitiesSuccess = createAction(
    '[get doctors] get doctors specialities Success',
    props<{ payload: SelectInput[] }>()
);

export const getDoctorsSpecialitiesFailure = createAction(
    '[get doctors] get doctors specialities Failure',
    props<{payload: any }>()
);
  
export const getDoctorsClinicsArea = createAction(
    '[get doctors] get doctors clinics area'
);

export const getDoctorsClinicsAreaSuccess = createAction(
    '[get doctors] get doctors clinics area Success',
    props<{ payload: SelectInput[] }>()
);

export const getDoctorsClinicsAreaFailure = createAction(
    '[get doctors] get doctors clinics area Failure',
    props<{payload: any }>()
);

export interface ActionWithPayload<T> extends Action {
    payload: T;
}