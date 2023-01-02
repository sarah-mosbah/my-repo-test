import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithPhoneInputComponent } from './login-with-phone-input.component';

describe('LoginWithPhoneInputComponent', () => {
  let component: LoginWithPhoneInputComponent;
  let fixture: ComponentFixture<LoginWithPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithPhoneInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginWithPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
