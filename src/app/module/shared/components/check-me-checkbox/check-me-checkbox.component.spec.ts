import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeCheckboxComponent } from './check-me-checkbox.component';

describe('CheckMeCheckboxComponent', () => {
  let component: CheckMeCheckboxComponent;
  let fixture: ComponentFixture<CheckMeCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMeCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
