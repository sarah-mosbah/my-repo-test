import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { take } from 'rxjs';
import { BookingConfirmationModal } from '../../../checkout/components/booking-confirmation-modal/booking-confirmation-modal.component';
import { ClinicSchedule } from '../../models/schedule.interface';

@Component({
  selector: 'time-picker-navigator',
  templateUrl: './time-picker-navigator.component.html',
  styleUrls: ['./time-picker-navigator.component.scss']
})
export class TimePickerNavigatorComponent implements OnInit {
  isFirstItem!: boolean;
  periods: ClinicSchedule[] = [{
    day: "monday",
    isFirstServeBased: true,
    ranges: [{
      startsAt: "11:00 AM",
      endsAt: "10:00 PM",
    }, {
      startsAt: "11:00 AM",
      endsAt: "10:00 PM",
    }]
    

  }, {
    day: "tuesday",
    timeSlots: [{
      startsAt: "12:00 PM",
      endsAt:"11:00 AM "
    }, {
      startsAt: "12:30 PM",
      endsAt:"1:00 PM"
    }, {
      startsAt: "12:00 PM",
      endsAt:"11:00 PM"
    }],
    isFirstServeBased: false

  }, {
    day: "wednesday",
    isFirstServeBased: false,
    timeSlots: []
  }, 
  {
    day: "thursday",
    isFirstServeBased: true,
  },  {
    day: "friday",
    timeSlots: [{
      startsAt: "12:00 PM",
      endsAt:"11:00 AM "
    }, {
      startsAt: "12:30 PM",
      endsAt:"1:00 PM"
    }, {
      startsAt: "12:00 PM",
      endsAt:"11:00 PM"
    }, {
      startsAt: "12:00 PM",
      endsAt:"11:00 PM"
    },  {
      startsAt: "12:00 PM",
      endsAt:"11:00 PM"
    }, {
      startsAt: "12:00 PM",
      endsAt:"11:00 PM"
    }, {
      startsAt: "12:00 PM",
      endsAt:"11:00 PM"
    }, {
      startsAt: "12:00 PM",
      endsAt:"11:00 PM"
    }],
    isFirstServeBased: false
}, {
  day: "saturday",
  isFirstServeBased: true,
  ranges: [{
    startsAt: "11:00 AM",
    endsAt: "10:00 PM",
  }, {
    startsAt: "11:00 AM",
    endsAt: "10:00 PM",
  }]} , {
  day: "sunday",
  isFirstServeBased: true,
  }];
  displayedPeriods!:ClinicSchedule[] ;
  currentDate: moment.Moment;
  sortedPeriods!: ClinicSchedule[];
  todaysDate: moment.Moment;
  constructor(public dialog: MatDialog, @Optional() public dialogRef: MatDialogRef<BookingConfirmationModal>) { 
    this.currentDate = moment(new Date(), 'dddd Do/MM YYYY');
    this.todaysDate = moment(new Date(), 'Do ddd/MM/YYYY');
  }
  private sortDates(periods: ClinicSchedule[]): ClinicSchedule[] {
    const answer: ClinicSchedule[] = [];
    const currentDay = moment(new Date(), 'dddd').day();
    for (let i = 0; i < periods.length; i++) {
      const  period = periods[i];
      const dayNumber = moment(`${period.day}`, 'dddd').day() ;
      const index = currentDay > dayNumber ? ((Math.abs((currentDay - dayNumber - 7) % 7))) :
       (dayNumber - currentDay);
       let updatedPeriod = {...period};
      answer[index] =  updatedPeriod;
    }
    return answer;
  }
  private getDayMinusOne(currentDay: string, index: number): moment.Moment {
    return moment(currentDay, 'Do ddd/MM/YYYY').clone().subtract(index, "days");
  }
  private getDayPlusOne(currentDay: string,  index: number): moment.Moment {
    return moment(currentDay, 'Do ddd/MM/YYYY').clone().add(index, "days");
  }
  ngOnInit(): void {
    this.sortedPeriods = this.sortDates(this.periods);
    this.displayedPeriods = this.sortedPeriods.slice(0, 3).map((value, index) =>{
      if(index === 0)  return {...value, day: this.currentDate.format('ddd D/MM/YYYY')}
      return {...value, day: this.currentDate.add(1, "day").format('ddd D/MM/YYYY')}
    });
    this.isFirstItem = true;
  }
  

  onPagination(navigationDirection: "left"| "right") {
    const firstDay = this.displayedPeriods[0].day;
    const lastDay = this.displayedPeriods[2].day
    this.displayedPeriods = [];
    if(navigationDirection === 'right') {
      this.isFirstItem = false;
      for (let index = 0; index < 3; index++) {
        const day = this.getDayPlusOne(lastDay,index+1);
        const period = this.sortedPeriods.find((period) => period.day === day.format('dddd').toLowerCase())!;
        this.displayedPeriods.push({
          ...period,
          day:  day.format('Do ddd/MM/YYYY'),
        });
      }
    } else {
      for (let index = 0; index < 3; index++) {
        const day =  this.getDayMinusOne(firstDay, index+1);
        const period = this.sortedPeriods.find((period) => period.day 
        === day.format('dddd').toLowerCase())!;
        this.displayedPeriods.unshift({
          ...period,
          day: day.format('Do ddd/MM/YYYY'),
        });
      }
    };
    this.isFirstItem =  this.todaysDate.format('Do ddd/MM/YYYY') 
      == this.displayedPeriods[0].day;
  }

  onBookingClicked(bookingTime: any) {
    this.dialogRef = this.dialog.open(BookingConfirmationModal, {
      data: bookingTime
    });
    this.dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log('closed');
    });
  }

}
 