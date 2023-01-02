import { Country } from '@angular-material-extensions/select-country';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { take } from 'rxjs';
import { PeriodRange } from '../../../home/models/schedule.interface';
import { Booking } from '../../models/booking.interface';
import { CheckoutProvider } from '../../state/providers/checkout.provider';
@Component({
  selector: 'booking-confirmation-modal',
  templateUrl: './booking-confirmation-modal.component.html',
  styleUrls: ['./booking-confirmation-modal.component.scss']
})
export class BookingConfirmationModal implements OnInit {
  bookingForm!: FormGroup;
  time: moment.Moment;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {period: PeriodRange, day: string},
   private formBuilder: FormBuilder, 
   private router: Router, 
   private checkoutProvider: CheckoutProvider,
   public dialogRef: MatDialogRef<BookingConfirmationModal>) {
      this.time = moment(data.day, "Do dd/MM/YYYY");

    }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      countryCode: new FormControl({alpha2Code: "EG"} as Country, Validators.required),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^1[0-2,5]{1}[0-9]{8}$/)]),
      userName: new FormControl('', [Validators.required])
    });
  }
  get countryCode() {
    return this.bookingForm.get('countryCode');
  }
  get phoneNumber() {
    return this.bookingForm.get('phoneNumber');
  }
  get userName() {
    return this.bookingForm.get('userName');
  }
  onBookingClicked() {
    const booking: Booking = {
      patientName: this.userName?.value,
      clinicId: 8,
      dayDate: this.time.format('yyyy-MM-DD'),
      startsAt: this.data.period.startsAt,
      patientPhone: this.phoneNumber?.value
    }
    this.checkoutProvider.dispatchBooking(booking);
    this.checkoutProvider.selectBooking$().pipe(take(2)).subscribe((x)=> {
      if(Object.keys(x).length) return;
      this.dialogRef.close();
      this.router.navigateByUrl('checkout');
    });
  }
}

