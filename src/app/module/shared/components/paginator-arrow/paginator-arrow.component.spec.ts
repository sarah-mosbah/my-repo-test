import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorArrowComponent } from './paginator-arrow.component';

describe('PaginatorArrowComponent', () => {
  let component: PaginatorArrowComponent;
  let fixture: ComponentFixture<PaginatorArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
