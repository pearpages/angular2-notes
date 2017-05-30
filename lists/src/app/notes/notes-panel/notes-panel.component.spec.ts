import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPanelComponent } from './notes-panel.component';

describe('NotesPanelComponent', () => {
  let component: NotesPanelComponent;
  let fixture: ComponentFixture<NotesPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
