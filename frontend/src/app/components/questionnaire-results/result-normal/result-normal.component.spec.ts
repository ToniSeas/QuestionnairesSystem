import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultNormalComponent } from './result-normal.component';

describe('ResultNormalComponent', () => {
  let component: ResultNormalComponent;
  let fixture: ComponentFixture<ResultNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultNormalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
