import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { PeriodRange } from '../../../models/schedule.interface';
@Component({
  selector: 'time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {
  @Input() isFirstServeBased!: boolean;
  @Input() periods: PeriodRange[] = [];
  @Input() day!: string;
  @Output() bookingClicked = new EventEmitter<{period:PeriodRange, day: string}>();
  todaysDate: any;
  isTodaysDate!: boolean;
  selectedPeriod!: PeriodRange;
  constructor() {
    this.todaysDate = moment(new Date(), 'Do ddd/MM/YYYY');
  }

  ngOnInit(): void {
    this.isTodaysDate = this.todaysDate.format('Do dd/MM/YYYY') === moment(this.day, 'Do ddd/MM/YYYY').format('Do dd/MM/YYYY');
  }

  getDayFormat(day: string){
    const momentDay = moment(day, 'Do ddd/MM/YYYY');
    if(this.isTodaysDate) {
      return 'Today';
    } else if(this.todaysDate.clone().add(1, 'days').format('Do dd/MM/YYYY') 
    === momentDay.format('Do dd/MM/YYYY')) {
      return 'Tomorrow';
    }
    return momentDay.format('ddd D/MM');
    
  }

  onBookingClick() {
    this.bookingClicked.emit({period: this.selectedPeriod, day: this.day});
  }
  setSelectedPeriod(period: PeriodRange) {
    this.selectedPeriod = period;
  }

}
