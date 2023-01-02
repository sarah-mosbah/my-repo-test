import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { MainPage } from '../../../../main.page';
import { takeUntil } from 'rxjs';
import { FilterProvider } from '../../state/providers/filter.provider';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent extends MainPage implements OnInit {

  @Output() onSearchBtnClicked: EventEmitter<string> = new EventEmitter();
  searchQuery!: FormControl;
  constructor(private activatedRoute: ActivatedRoute, private filterProvider: FilterProvider) {
    super();
    this.searchQuery = new FormControl('');
    this.activatedRoute.queryParams.pipe(takeUntil(this.destroyed$)).subscribe((query) =>{
      if(query['q']) {
        const searchKey = query['q'];
        const trimmedSearchQuery =  searchKey.replace("%20", " ");
        this.searchQuery.setValue(trimmedSearchQuery);
        this.filterProvider.setSearchQuery(this.searchQuery.value);
      } else {
        this.searchQuery.setValue('');
        this.filterProvider.setSearchQuery(this.searchQuery.value)
      }
    });
  }

  ngOnInit(): void {
   
  }

  onButtonClicked() {
    this.onSearchBtnClicked.emit(this.searchQuery.value);
  }

}
