import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() icon!: string;
  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
