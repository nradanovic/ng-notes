import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/core/services/app-state/app-state.service';
import { NotesService } from 'src/app/core/services/notes/notes.service';

@Component({
  selector: 'app-app-note-preview',
  templateUrl: './app-note-preview.component.html',
  styleUrls: ['./app-note-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNotePreviewComponent implements OnInit {

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

  public openEditMode() {
    this.appStateService.editNote(this.noteId);
  }

  public deleteNote() {
    this.noteService.deleteNote(this.noteId);
    this.appStateService.showAllNotes();
  }
}
