import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'check-me-white-button',
  templateUrl: './check-me-white-button.component.html',
  styleUrls: ['./check-me-white-button.component.scss']
})
export class CheckMeWhiteButtonComponent implements OnInit {
  @Input() btnText!: string;
  @Input() disabled!: boolean;
  @Input() icon!: string;
  @Output() buttonClickedEvent: EventEmitter<void>;
  constructor() { 
    this.buttonClickedEvent = new EventEmitter();
  }
  ngOnInit(): void {
  }
  buttonClicked(){
    this.buttonClickedEvent.emit();
  }
}
