import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatPadComponent } from './flat-pad.component';

describe('FlatPadComponent', () => {
  let component: FlatPadComponent;
  let fixture: ComponentFixture<FlatPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlatPadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlatPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
