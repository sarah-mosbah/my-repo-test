import { Component, Input, OnInit } from '@angular/core';

export interface Category {
  icon: string;
  title: string;
  price: number;
}
@Component({
  selector: 'app-check-me-category-item',
  templateUrl: './check-me-category-item.component.html',
  styleUrls: ['./check-me-category-item.component.scss']
})
export class CheckMeCategoryItemComponent implements OnInit {

  @Input() category!: Category; 
  constructor() { }

  ngOnInit(): void {
  }

}
