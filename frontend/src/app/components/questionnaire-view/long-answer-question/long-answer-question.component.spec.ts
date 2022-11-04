import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongAnswerQuestionComponent } from './long-answer-question.component';

describe('LongAnswerQuestionComponent', () => {
  let component: LongAnswerQuestionComponent;
  let fixture: ComponentFixture<LongAnswerQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongAnswerQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LongAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
