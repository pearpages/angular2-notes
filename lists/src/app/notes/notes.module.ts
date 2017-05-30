import { NotesRoutingModule } from './notes-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesPanelComponent } from './notes-panel/notes-panel.component';

@NgModule({
  imports: [
    CommonModule, NotesRoutingModule
  ],
  declarations: [NotesPanelComponent],
  exports: [NotesPanelComponent]
})
export class NotesModule { }
