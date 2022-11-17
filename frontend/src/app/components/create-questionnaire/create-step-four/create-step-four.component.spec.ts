import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepFourComponent } from './create-step-four.component';

describe('CreateStepFourComponent', () => {
  let component: CreateStepFourComponent;
  let fixture: ComponentFixture<CreateStepFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStepFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStepFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
