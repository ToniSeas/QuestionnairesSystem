import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOfficeComponent } from './select-office.component';

describe('SelectOfficeComponent', () => {
  let component: SelectOfficeComponent;
  let fixture: ComponentFixture<SelectOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
