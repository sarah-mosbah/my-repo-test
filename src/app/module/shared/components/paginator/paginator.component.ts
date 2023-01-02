import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  pageNumber: number = 1;
  @Output() onPaginate = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  paginate(event: number) {
    this.onPaginate.emit(event);
  }
}
