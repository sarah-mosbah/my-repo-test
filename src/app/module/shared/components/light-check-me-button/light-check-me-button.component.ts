import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'light-check-me-button',
  templateUrl: './light-check-me-button.component.html',
  styleUrls: ['./light-check-me-button.component.scss']
})
export class LightCheckMeButtonComponent implements OnInit {

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
