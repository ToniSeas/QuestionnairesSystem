import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepFiveComponent } from './create-step-five.component';

describe('CreateStepFiveComponent', () => {
  let component: CreateStepFiveComponent;
  let fixture: ComponentFixture<CreateStepFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStepFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStepFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
