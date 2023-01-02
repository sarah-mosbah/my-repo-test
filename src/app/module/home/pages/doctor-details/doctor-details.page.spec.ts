import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorDetailsPage } from './doctor-details.page';

describe('DoctorDetailsComponent', () => {
  let component: DoctorDetailsPage;
  let fixture: ComponentFixture<DoctorDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorDetailsPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
