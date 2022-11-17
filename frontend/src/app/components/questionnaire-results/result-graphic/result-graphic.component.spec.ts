import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGraphicComponent } from './result-graphic.component';

describe('ResultGraphicComponent', () => {
  let component: ResultGraphicComponent;
  let fixture: ComponentFixture<ResultGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultGraphicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
