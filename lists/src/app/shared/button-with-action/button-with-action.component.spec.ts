import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithActionComponent } from './button-with-action.component';

describe('ButtonWithActionComponent', () => {
  let component: ButtonWithActionComponent;
  let fixture: ComponentFixture<ButtonWithActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonWithActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
