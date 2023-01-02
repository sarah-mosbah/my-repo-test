import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map, of, retry } from "rxjs";
import { CheckoutService } from "../../services/checkout.service";
import * as fromCheckoutActions from '../actions/checkout.actions';

@Injectable()
export class CheckoutEffects {

    constructor(private actions$: Actions, private checkoutService: CheckoutService) {
        
    }
    book$ = createEffect(
        () => this.actions$.pipe(
          ofType(fromCheckoutActions.booking.type),
          concatMap(
           ( payload: any )=> {
              return this.checkoutService.book(payload.payload)
              .pipe(
              map(
                (response: any) => 
                (fromCheckoutActions.bookingSuccess({ payload: response }))),
                catchError((error) => of(fromCheckoutActions.bookingFailure(error)))
              )
            }
          )
        )
      );
    
}