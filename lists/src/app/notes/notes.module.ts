import { SharedModule } from './../shared/shared.module';
import { NotesRoutingModule } from './notes-routing.module';
import { NgModule } from '@angular/core';
import { NotesPanelComponent } from './notes-panel/notes-panel.component';

@NgModule({
  imports: [
    SharedModule, NotesRoutingModule
  ],
  declarations: [NotesPanelComponent],
  exports: [NotesPanelComponent]
})
export class NotesModule { }
