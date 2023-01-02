import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeWhiteButtonComponent } from './check-me-white-button.component';

describe('CheckMeWhiteButtonComponent', () => {
  let component: CheckMeWhiteButtonComponent;
  let fixture: ComponentFixture<CheckMeWhiteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeWhiteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMeWhiteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
