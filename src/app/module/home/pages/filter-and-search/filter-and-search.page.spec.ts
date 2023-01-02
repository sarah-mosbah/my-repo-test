import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAndSearchPage } from './filter-and-search.page';

describe('FilterAndSearchComponent', () => {
  let component: FilterAndSearchPage;
  let fixture: ComponentFixture<FilterAndSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAndSearchPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterAndSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
