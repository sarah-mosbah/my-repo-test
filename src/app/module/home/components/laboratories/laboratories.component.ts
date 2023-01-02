import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-laboratories',
  templateUrl: './laboratories.component.html',
  styleUrls: ['./laboratories.component.scss']
})
export class LaboratoriesComponent implements OnInit {
  customOptions: OwlOptions;
  labs: string[];
  constructor() { 
    this.labs = [
      'assets/images/test-icons/lab2.svg',
      'assets/images/test-icons/lab2.svg',
      'assets/images/test-icons/lab2.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab2.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab2.svg',
      'assets/images/test-icons/lab3.svg',
      'assets/images/test-icons/lab3.svg',
    ]
    this.customOptions = {
      // rewind: true,
      loop: true,
      dots: false,
      nav: true,
      margin: 10,
      navText: ["<img src='assets/images/left-dir-arrow.svg'>", "<img src='assets/images/right-dir-arrow-icon.png'>"],
      responsive: {
        768 : {
          items: 4,
          slideBy: 1
        },
        1024 : {
          items: 5,
          slideBy: 1
        },
        1280 : {
          items: 5,
          slideBy: 1
        },
        1440 : {
          items: 7,
          slideBy: 1
        },
   },
  }
  
  }

  ngOnInit(): void {

  }

}
