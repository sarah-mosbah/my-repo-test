import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInformationCardComponent } from './doctor-information-card.component';

describe('DoctorInformationCardComponent', () => {
  let component: DoctorInformationCardComponent;
  let fixture: ComponentFixture<DoctorInformationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorInformationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorInformationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
