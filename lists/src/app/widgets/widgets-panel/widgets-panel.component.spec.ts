import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsPanelComponent } from './widgets-panel.component';

describe('WidgetsPanelComponent', () => {
  let component: WidgetsPanelComponent;
  let fixture: ComponentFixture<WidgetsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
