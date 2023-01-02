import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input('rating')  rating: number = 0;
  @Input('readonly')  readonly: boolean = true;
  @Output() private ratingUpdated = new EventEmitter();
  ratingArr: number[] = [];

  constructor() {}

  ngOnInit() {

  }
  showIcon(index: number): string {
    if(!this.readonly) {
      return this.rating >= index + 1 ? 'assets/images/filled-32px-star.svg' : 'assets/images/unfilled-star.svg'
    }
    return this.rating >= index + 1 ? 'assets/images/filled-star.svg' : ''
  }

}
