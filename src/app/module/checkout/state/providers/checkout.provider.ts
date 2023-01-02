import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Booking } from "../../models/booking.interface";
import * as fromReducer from '../reducers/checkout.reducer';
import * as fromActions from '../actions/checkout.actions';
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
  })
  export class CheckoutProvider {
  
    constructor(private store: Store<fromReducer.FeatureState>) {
    }

    public dispatchBooking(booking: Booking) {
        this.store.dispatch(fromActions.booking({payload: booking}));
    }

    public selectBooking$(): Observable<any> {
       return this.store.pipe(select(fromReducer.selectBooking));
    }
}