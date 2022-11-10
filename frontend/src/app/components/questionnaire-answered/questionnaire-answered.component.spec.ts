import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireAnsweredComponent } from './questionnaire-answered.component';

describe('QuestionnaireAnsweredComponent', () => {
  let component: QuestionnaireAnsweredComponent;
  let fixture: ComponentFixture<QuestionnaireAnsweredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionnaireAnsweredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionnaireAnsweredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
