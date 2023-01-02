import { Component, Input, OnInit } from '@angular/core';

export interface Feedback {
  reviewerName: string;
  reviewerType: string;
  feedbackTitle: string;
  feedbackDescription: string;
}

@Component({
  selector: 'app-feed-back-card',
  templateUrl: './feed-back-card.component.html',
  styleUrls: ['./feed-back-card.component.scss']
})
export class FeedBackCardComponent implements OnInit {

  @Input() feedback!: Feedback;
  constructor() { }

  ngOnInit(): void {

  }

}
