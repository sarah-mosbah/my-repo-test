import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMeBundleItemComponent } from './check-me-bundle-item.component';

describe('CheckMeBundleItemComponent', () => {
  let component: CheckMeBundleItemComponent;
  let fixture: ComponentFixture<CheckMeBundleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMeBundleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMeBundleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
