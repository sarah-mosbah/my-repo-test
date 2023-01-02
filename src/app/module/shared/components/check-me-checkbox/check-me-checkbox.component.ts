import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'check-me-checkbox',
  templateUrl: './check-me-checkbox.component.html',
  styleUrls: ['./check-me-checkbox.component.scss']
})
export class CheckMeCheckboxComponent implements OnInit {
  @Input() label!: string;
  @Input() options: {value: number, name: string}[] =[]; 
  @Output() onCheckboxChange = new EventEmitter();
  result: number[] = [];
  showAll!: boolean
  constructor() { }

  ngOnInit(): void {}

  onChange(event: any, option: {value: number, name: string}) {
    if(event.checked) 
      this.result.push(option.value);
    else 
      this.result.splice(this.result.indexOf(option.value), 1);
    this.onCheckboxChange.emit(this.result);
  }
  toggleShow(value: boolean) {
    this.showAll = value;
  }
}
