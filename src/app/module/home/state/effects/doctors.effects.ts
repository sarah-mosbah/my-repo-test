import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { FilterOptions } from "../../../shared/models/filterOptions.interface";
import { DoctorService } from "../../services/doctor.service";
import { UtilityService } from "../../services/utilities.service";
import * as fromDoctorsActions from '../actions/doctors.actions';

@Injectable()
export class DoctorsEffects {

    constructor(private actions$: Actions, private doctorsService: DoctorService, private specialityService: UtilityService) {
    }
    getAllDoctors$ = createEffect(
        () => this.actions$.pipe(
          ofType(fromDoctorsActions.getDoctors.type),
          mergeMap(
           (payload: {payload: FilterOptions})=> {
              return this.doctorsService.getAllDoctors(payload.payload)
              .pipe(
              map(
                (response: any) => 
                (fromDoctorsActions.getDoctorsSuccess({ payload: response }))),
                catchError((error) => of(fromDoctorsActions.getDoctorsFailure(error)))
              )
            }
          )
        )
      );

      getAllDoctorsSpecialities$ = createEffect(
        () => this.actions$.pipe(
          ofType(fromDoctorsActions.getDoctorsSpecialities.type),
          mergeMap(
           ()=> {
              return this.specialityService.getSpecialities$()
              .pipe(
              map(
                (response: any) => 
                (fromDoctorsActions.getDoctorsSpecialitiesSuccess({ payload: response.data }))),
                catchError((error) => of(fromDoctorsActions.getDoctorsSpecialitiesFailure(error)))
              )
            }
          )
        )
      );

      getDoctorsClinicsArea$ = createEffect(
        () => this.actions$.pipe(
          ofType(fromDoctorsActions.getDoctorsClinicsArea.type),
          mergeMap(
           ()=> {
              return this.specialityService.getAllAreas$()
              .pipe(
              map(
                (response: any) => 
                (fromDoctorsActions.getDoctorsClinicsAreaSuccess({ payload: response.data }))),
                catchError((error) => of(fromDoctorsActions.getDoctorsClinicsAreaFailure(error)))
              )
            }
          )
        )
      );
    
    
}