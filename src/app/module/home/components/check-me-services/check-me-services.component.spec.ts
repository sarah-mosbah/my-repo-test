import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeServicesComponent } from './check-me-services.component';

describe('CheckMeServicesComponent', () => {
  let component: CheckMeServicesComponent;
  let fixture: ComponentFixture<CheckMeServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
