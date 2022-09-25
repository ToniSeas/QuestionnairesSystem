import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchQuestionnaireComponent } from './search-questionnaire.component';

describe('SearchQuestionnaireComponent', () => {
  let component: SearchQuestionnaireComponent;
  let fixture: ComponentFixture<SearchQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchQuestionnaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
