import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDisplayStates, AppStateService, } from 'src/app/core/services/app-state/app-state.service';
import { NotesService } from 'src/app/core/services/notes/notes.service';

@Component({
  selector: 'app-app-notes-grid',
  templateUrl: './app-notes-grid.component.html',
  styleUrls: ['./app-notes-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNotesGridComponent {

  public appStates = AppDisplayStates;

  constructor(public notesService: NotesService, public appStateService: AppStateService) { }

  createNewNote(): void {
    this.appStateService.createNewNote();
  }

  editNote(noteId: number): void {
    this.appStateService.editNote(noteId);
  }

  previewNote(noteId: number): void {
    this.appStateService.previewNote(noteId);
  }
}
