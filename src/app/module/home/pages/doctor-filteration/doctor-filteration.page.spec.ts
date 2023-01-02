import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFilterationPage } from './doctor-filteration.page';

describe('SearchAndFilterPageComponent', () => {
  let component: DoctorFilterationPage;
  let fixture: ComponentFixture<DoctorFilterationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorFilterationPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorFilterationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
