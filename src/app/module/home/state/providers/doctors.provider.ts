import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Doctor } from "../../../shared/models/user.interface";
import { FilterOptions } from "../../../shared/models/filterOptions.interface";
import { SelectInputResponse } from "../../../shared/models/selectInput.response";

import * as fromReducer from '../reducers/home.reducer';
import * as fromDoctorsActions from '../actions/doctors.actions';
import { SelectInput } from "../../../shared/models/selectInput.interface";
@Injectable({
    providedIn: 'root'
  })
  export class DoctorsProvider {
  
    constructor(private store: Store<fromReducer.ModuleState>) {
    }

    public dispatchGetAllDoctors(filterOptions: FilterOptions) {
      this.store.dispatch(fromDoctorsActions.getDoctors({payload: filterOptions}));
    }
    public dispatchGetDoctorsSpecilaities() {
      this.store.dispatch(fromDoctorsActions.getDoctorsSpecialities());
    }

    public dispatchGetDoctorsClinicsArea() {
      this.store.dispatch(fromDoctorsActions.getDoctorsClinicsArea());
    }

    public selectDoctors$(): Observable<{doctors: Doctor[], count: number} | undefined> {
      return this.store.pipe(select(fromReducer.selectDoctors));
    }

    public selectDoctorsSpecilaities$(): Observable<SelectInput[] | undefined> {
      return this.store.pipe(select(fromReducer.selectDoctorsSpecialities));
    }
    public selectDoctorsClinicsArea$(): Observable<SelectInput[]  | undefined> {
      return this.store.pipe(select(fromReducer.selectDoctorsClinicsArea));
    }
}