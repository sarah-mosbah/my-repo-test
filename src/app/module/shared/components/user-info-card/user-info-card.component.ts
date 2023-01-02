import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../../models/user.interface';

@Component({
  selector: 'user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent implements OnInit {

  @Input() doctor!: Doctor;
  constructor() { }

  ngOnInit(): void {
  }

}
