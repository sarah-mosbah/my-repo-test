import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-check-me-slider',
  templateUrl: './check-me-slider.component.html',
  styleUrls: ['./check-me-slider.component.scss']
})
export class CheckMeSliderComponent implements OnInit {
  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Input() data!: any[];
  @Input() responsive!: {[key: number]: {items: number}};
  customOptions!: OwlOptions;
  constructor() { }
  ngOnInit(): void {
    this.customOptions = {
      rtl: navigator.language === "ar" ? true : false,
      rewind: true,
      loop: true,
      autoplaySpeed: 1000,
      nav: true,
      margin: 20,
      navText: ["<img src='assets/images/left-dir-arrow.svg'>", "<img src='assets/images/right-dir-arrow-icon.png'>"],
      responsive: this.responsive
    }
  }

}
