import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() dayName!: string;
  @Input() dayNumber!: string;
  @Input() width: string = "65px";
  constructor() { }

  ngOnInit(): void {
  }

}
