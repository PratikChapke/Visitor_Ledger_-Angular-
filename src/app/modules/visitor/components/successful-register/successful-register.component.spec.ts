import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulRegisterComponent } from './successful-register.component';

describe('SuccessfulRegisterComponent', () => {
  let component: SuccessfulRegisterComponent;
  let fixture: ComponentFixture<SuccessfulRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessfulRegisterComponent]
    });
    fixture = TestBed.createComponent(SuccessfulRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
