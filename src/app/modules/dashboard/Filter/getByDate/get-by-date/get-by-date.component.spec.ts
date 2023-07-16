import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByDateComponent } from './get-by-date.component';

describe('GetByDateComponent', () => {
  let component: GetByDateComponent;
  let fixture: ComponentFixture<GetByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetByDateComponent]
    });
    fixture = TestBed.createComponent(GetByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
