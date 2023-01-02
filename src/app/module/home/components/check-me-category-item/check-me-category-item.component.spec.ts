import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeCategoryItemComponent } from './check-me-category-item.component';

describe('CheckMeCategoryItemComponent', () => {
  let component: CheckMeCategoryItemComponent;
  let fixture: ComponentFixture<CheckMeCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeCategoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMeCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
