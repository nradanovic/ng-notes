import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AppDisplayStates, AppStateService } from 'src/app/core/services/app-state/app-state.service';
import { NotesService } from 'src/app/core/services/notes/notes.service';

@Component({
  selector: 'app-app-note-edit',
  templateUrl: './app-note-edit.component.html',
  styleUrls: ['./app-note-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNoteEditComponent {

  @Input() noteId: number;

  public note: string;
  public hoverColor = '#B90445';

  constructor(public noteService: NotesService, private appStateService: AppStateService) { }

  ngOnInit(): void {
    this.note = this.noteService.getNote(this.noteId);
  }

  public close() {
    this.appStateService.showAllNotes();
  }

  public saveNote() {
    if (this.appStateService.state.displayState === AppDisplayStates.NOTE_CREATE) {
      const newNoteId = this.noteService.addNote(this.note);
      this.noteId = newNoteId;
    }
    else if (this.appStateService.state.displayState === AppDisplayStates.NOTE_EDIT) {
      this.noteService.updateNote(this.noteId, this.note);
    }
    this.appStateService.previewNote(this.noteId);
  }

  public deleteNote() {
    this.noteService.deleteNote(this.noteId);
    this.appStateService.showAllNotes();
  }
}
