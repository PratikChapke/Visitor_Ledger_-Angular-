import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutTimeComponent } from './out-time.component';

describe('OutTimeComponent', () => {
  let component: OutTimeComponent;
  let fixture: ComponentFixture<OutTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutTimeComponent]
    });
    fixture = TestBed.createComponent(OutTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
