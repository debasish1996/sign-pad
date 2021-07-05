import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingPadModalComponent } from './drawing-pad-modal.component';

describe('DrawingPadModalComponent', () => {
  let component: DrawingPadModalComponent;
  let fixture: ComponentFixture<DrawingPadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingPadModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingPadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
