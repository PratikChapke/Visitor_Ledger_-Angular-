import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByEmployeeComponent } from './get-by-employee.component';

describe('GetByEmployeeComponent', () => {
  let component: GetByEmployeeComponent;
  let fixture: ComponentFixture<GetByEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetByEmployeeComponent]
    });
    fixture = TestBed.createComponent(GetByEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
