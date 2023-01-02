import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'check-me-button',
  templateUrl: './check-me-button.component.html',
  styleUrls: ['./check-me-button.component.scss']
})
export class CheckMeButtonComponent implements OnInit {
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
