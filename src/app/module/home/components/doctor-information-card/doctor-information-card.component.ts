import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../../../shared/models/user.interface';

@Component({
  selector: 'doctor-information-card',
  templateUrl: './doctor-information-card.component.html',
  styleUrls: ['./doctor-information-card.component.scss']
})
export class DoctorInformationCardComponent implements OnInit {

  @Input() doctor!: Doctor;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl(`doctors/${this.doctor.doctorAuthId}`)
  }
}
