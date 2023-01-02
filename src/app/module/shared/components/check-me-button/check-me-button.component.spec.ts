import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeButtonComponent } from './check-me-button.component';

describe('CheckMeButtonComponent', () => {
  let component: CheckMeButtonComponent;
  let fixture: ComponentFixture<CheckMeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
