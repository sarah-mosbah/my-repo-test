import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerNavigatorComponent } from './time-picker-navigator.component';

describe('TimePickerNavigatorComponent', () => {
  let component: TimePickerNavigatorComponent;
  let fixture: ComponentFixture<TimePickerNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimePickerNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
