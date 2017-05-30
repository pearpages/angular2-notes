import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsPanelComponent } from './cars-panel.component';

describe('CarsPanelComponent', () => {
  let component: CarsPanelComponent;
  let fixture: ComponentFixture<CarsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
