import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOtpInputComponent } from './mobile-otp-input.component';

describe('MobileOtpInputComponent', () => {
  let component: MobileOtpInputComponent;
  let fixture: ComponentFixture<MobileOtpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileOtpInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileOtpInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
