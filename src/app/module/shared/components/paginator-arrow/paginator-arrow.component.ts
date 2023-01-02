import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'paginator-arrow',
  templateUrl: './paginator-arrow.component.html',
  styleUrls: ['./paginator-arrow.component.scss']
})
export class PaginatorArrowComponent implements OnInit {

  @Input() direction: "left" | "right" = "left";
  @Input() disabled!: boolean;
  @Output() onPaginationClicked = new EventEmitter<"left" | "right">();
  constructor() { }

  ngOnInit(): void {
  }

  onPagination(event: Event) {
    event.stopPropagation();
    if(this.disabled) return;
    this.onPaginationClicked.emit(this.direction);
  }

}
