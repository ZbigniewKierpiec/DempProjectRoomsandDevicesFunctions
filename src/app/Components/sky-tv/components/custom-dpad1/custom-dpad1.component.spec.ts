import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDpad1Component } from './custom-dpad1.component';

describe('CustomDpad1Component', () => {
  let component: CustomDpad1Component;
  let fixture: ComponentFixture<CustomDpad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDpad1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDpad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
