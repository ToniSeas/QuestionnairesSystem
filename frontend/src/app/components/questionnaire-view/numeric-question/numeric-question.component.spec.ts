import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericQuestionComponent } from './numeric-question.component';

describe('NumericQuestionComponent', () => {
  let component: NumericQuestionComponent;
  let fixture: ComponentFixture<NumericQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
