import { Component, Input, OnInit } from '@angular/core';

export interface Bundle {
  name: string;
  properties: { bloodTest: boolean, fasting: boolean, noOfTests: number },
  price: number;
}

@Component({
  selector: 'app-check-me-bundle-item',
  templateUrl: './check-me-bundle-item.component.html',
  styleUrls: ['./check-me-bundle-item.component.scss']
})
export class CheckMeBundleItemComponent implements OnInit {

  @Input() bundle!: Bundle;
  constructor() { }

  ngOnInit(): void {
  }

}
