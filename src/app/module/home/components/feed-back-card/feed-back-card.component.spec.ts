import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackCardComponent } from './feed-back-card.component';

describe('FeedBackCardComponent', () => {
  let component: FeedBackCardComponent;
  let fixture: ComponentFixture<FeedBackCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBackCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedBackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
