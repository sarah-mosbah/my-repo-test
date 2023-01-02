import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-check-me-services',
  templateUrl: './check-me-services.component.html',
  styleUrls: ['./check-me-services.component.scss']
})
export class CheckMeServicesComponent implements OnInit {

  services = [
              'assets/images/Book a Test.png',
              'assets/images/Book a clinic.png',
              'assets/images/covid tests.png',
              'assets/images/Talk to a Doctor.png', 
              'assets/images/Book a Scan.png',
              'assets/images/Upload Prescription.png',
              'assets/images/order medicine (1).png',
              'assets/images/order medicine (2).png',
            ];
  customOptions: OwlOptions = {
    rtl: navigator.language === "ar" ? true : false,
    rewind: true,
    autoplay: true,
    loop: true,
    autoplaySpeed: 1000,
    skip_validateItems: true,
    margin: 10,
    responsive: {
      240: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 5
      }
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

}
