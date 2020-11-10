import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesService } from './services/notes/notes.service';
import { AppStateService } from './services/app-state/app-state.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@NgModule({
  providers: [NotesService, AppStateService, LocalStorageService],
  imports: [CommonModule]
})
export class CoreModule { }
