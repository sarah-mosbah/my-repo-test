import { HttpErrorResponse } from '@angular/common/http';
import { Action, createReducer, on, createSelector } from '@ngrx/store';
import { SelectInput } from '../../../shared/models/selectInput.interface';
import { SelectInputResponse } from '../../../shared/models/selectInput.response';
import { Doctor } from '../../../shared/models/user.interface';
import * as fromDoctorsActions from '../actions/doctors.actions';
import * as fromFiltersActions from '../actions/filters.actions';
export const homeFeatureKey = 'homeFeature';

export interface FeatureState {
    error?: HttpErrorResponse;
    doctorsResponse?: {doctors: Doctor[], count: number};
    searchKey: string;
    doctorSpecialties?: SelectInput[];
    clinicArea?: SelectInput[];
}
export interface ModuleState {
    homeFeature: FeatureState;
}
export const selectFeature  = (state: ModuleState) => state.homeFeature;
export const selectDoctors = createSelector(
    selectFeature,
    (state: FeatureState) => state.doctorsResponse,
);
export const selectDoctorsSpecialities = createSelector(
    selectFeature,
    (state: FeatureState) => state.doctorSpecialties,
);
export const selectDoctorsClinicsArea = createSelector(
    selectFeature,
    (state: FeatureState) => state.clinicArea,
);
export const selectSearchKey = createSelector(
    selectFeature,
    (state: FeatureState) => state.searchKey,
);
export const initialState: FeatureState = {
    error: {} as HttpErrorResponse,
    doctorsResponse: undefined,
    searchKey: '',
    doctorSpecialties: undefined,
    clinicArea: undefined
}


const homeReducer = createReducer(
    initialState,
    //#Doctors
    on(fromDoctorsActions.getDoctors, (state)=> ({...state, error: undefined})),
    on(fromDoctorsActions.getDoctorsSuccess, (state, action)=> (({...state, doctorsResponse: action.payload}))),
    on(fromDoctorsActions.getDoctorsFailure, (state, action)=> ({...state, error: action.payload})),

    on(fromDoctorsActions.getDoctorsSpecialities, (state)=> ({...state, error: undefined})),
    on(fromDoctorsActions.getDoctorsSpecialitiesSuccess, (state, action)=> (({...state, doctorSpecialties: action.payload}))),
    on(fromDoctorsActions.getDoctorsSpecialitiesFailure, (state, action)=> ({...state, error: action.payload})),
    on(fromDoctorsActions.getDoctorsClinicsArea, (state)=> ({...state, error: undefined})),
    on(fromDoctorsActions.getDoctorsClinicsAreaSuccess, (state, action)=> ({...state,  clinicArea: action.payload})),
    on(fromDoctorsActions.getDoctorsClinicsAreaFailure, (state, action)=> ({...state,  error: action.payload})),
    //Filters
    on(fromFiltersActions.setSearchKey, (state, action)=> ({...state, searchKey: action.payload})),
)

export function reducer(state: FeatureState | undefined, action: Action) {        
    return homeReducer(state, action);
}
