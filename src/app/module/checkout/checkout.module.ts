import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutSuccessPage } from './pages/checkout-success/checkout-success.component';
import { BookingConfirmationModal } from './components/booking-confirmation-modal/booking-confirmation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromFeatureState from "./state/reducers/checkout.reducer";
import { EffectsModule } from '@ngrx/effects';
import { CheckoutEffects } from './state/effects/checkout.effects';
@NgModule({
  declarations: [
    CheckoutSuccessPage,
    BookingConfirmationModal,
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectCountryModule,
    MatDialogModule,
    StoreModule.forFeature(fromFeatureState.checkoutFeatureKey, fromFeatureState.reducer),
    EffectsModule.forFeature([CheckoutEffects]),
  ],
})
export class CheckoutModule {}
