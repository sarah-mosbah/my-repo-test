import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeSliderComponent } from './check-me-slider.component';

describe('CheckMeSliderComponent', () => {
  let component: CheckMeSliderComponent;
  let fixture: ComponentFixture<CheckMeSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
