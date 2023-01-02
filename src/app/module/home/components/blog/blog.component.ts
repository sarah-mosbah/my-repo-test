import { Component, Input, OnInit } from '@angular/core';

export interface Article {
  articleImage: string;
  articleType: string;
  articleTitle: string;
  authorImage: string; 
  authorName: string; 
  publishingTime: string;
  readingTime: string;
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() article!: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
