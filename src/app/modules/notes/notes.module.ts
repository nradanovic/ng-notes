import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNotesGridComponent } from './components/app-notes-grid/app-notes-grid.component';
import { AppNotePreviewComponent } from './components/app-note-preview/app-note-preview.component';
import { MarkdownModule } from 'ngx-markdown';
import { AppNoteEditComponent } from './components/app-note-edit/app-note-edit.component';
import { NotesComponent } from './notes.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NotesComponent, AppNotesGridComponent, AppNotePreviewComponent, AppNoteEditComponent],
  imports: [CommonModule, FormsModule, MarkdownModule.forRoot(), SharedModule],
  exports: [NotesComponent],
})
export class AppNotesModule { }
