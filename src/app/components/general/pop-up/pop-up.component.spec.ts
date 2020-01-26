import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { miniDashboardComponent } from './pop-up.component';

describe('miniDashboardComponent', () => {
  let component: miniDashboardComponent;
  let fixture: ComponentFixture<miniDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ miniDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(miniDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
