import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByRangeComponent } from './get-by-range.component';

describe('GetByRangeComponent', () => {
  let component: GetByRangeComponent;
  let fixture: ComponentFixture<GetByRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetByRangeComponent]
    });
    fixture = TestBed.createComponent(GetByRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
