import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightCheckMeButtonComponent } from './light-check-me-button.component';

describe('LightCheckMeButtonComponent', () => {
  let component: LightCheckMeButtonComponent;
  let fixture: ComponentFixture<LightCheckMeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightCheckMeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightCheckMeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
