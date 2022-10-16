import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepThreeComponent } from './create-step-three.component';

describe('CreateStepThreeComponent', () => {
  let component: CreateStepThreeComponent;
  let fixture: ComponentFixture<CreateStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStepThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
