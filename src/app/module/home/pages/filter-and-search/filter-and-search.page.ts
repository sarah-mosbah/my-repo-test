import { Component, OnInit } from '@angular/core';
import { FilterProvider } from '../../state/providers/filter.provider';

@Component({
  selector: 'filter-and-search',
  templateUrl: './filter-and-search.page.html',
  styleUrls: ['./filter-and-search.page.scss']
})
export class FilterAndSearchPage implements OnInit {

  constructor(private filterProvider: FilterProvider) { }

  ngOnInit(): void {
  }

  onSearchClicked(query: any) {
    this.filterProvider.setSearchQuery(query);
  }
}
