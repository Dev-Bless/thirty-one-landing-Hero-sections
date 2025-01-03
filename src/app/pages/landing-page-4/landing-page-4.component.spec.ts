import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage4Component } from './landing-page-4.component';

describe('LandingPage4Component', () => {
  let component: LandingPage4Component;
  let fixture: ComponentFixture<LandingPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPage4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
