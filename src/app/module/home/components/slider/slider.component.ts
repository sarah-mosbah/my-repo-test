import { Options } from '@angular-slider/ngx-slider';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() lowValue: number = 50;
  @Input()  highValue: number = 500;
  @Input() options: Options = {
    floor: 0,
    ceil: 1000
  };
  @Output() onSlideChange: EventEmitter<{lowValue: number, highValue: number}> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  sliderValueChange(high: number, low: number) {
    this.onSlideChange.emit({lowValue: low, highValue: high})
  }
}
