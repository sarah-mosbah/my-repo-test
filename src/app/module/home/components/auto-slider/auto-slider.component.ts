import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-auto-slider',
  templateUrl: './auto-slider.component.html',
  styleUrls: ['./auto-slider.component.scss']
})
export class AutoSliderComponent implements OnInit {

  @ContentChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Input() data!: any[];
  @Input() customOptions!: OwlOptions;
  constructor() { }

  ngOnInit(): void {
  }

}
