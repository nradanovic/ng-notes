import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export enum AppDisplayStates {
  NOTES_GRID,
  NOTE_CREATE,
  NOTE_PREVIEW,
  NOTE_EDIT,
}

export interface AppState {
  displayState: AppDisplayStates;
  noteId?: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private appInitialState: AppState = {
    displayState: AppDisplayStates.NOTES_GRID,
  };
  private appState$ = new BehaviorSubject<AppState>(this.appInitialState);

  constructor() { }

  public get state() {
    return this.appState$.value;
  }

  getState(): Observable<AppState> {
    return this.appState$.asObservable();
  }

  updateState(state: AppState): void {
    this.appState$.next(state);
  }

  public showAllNotes(): void {
    this.appState$.next({
      displayState: AppDisplayStates.NOTES_GRID,
    });
  }

  public createNewNote() {
    this.appState$.next({
      displayState: AppDisplayStates.NOTE_CREATE,
      noteId: null,
    });
  }

  public previewNote(noteId: number): void {
    this.appState$.next({
      displayState: AppDisplayStates.NOTE_PREVIEW,
      noteId,
    });
  }

  public editNote(noteId: number) {
    this.appState$.next({
      displayState: AppDisplayStates.NOTE_EDIT,
      noteId,
    });
  }
}
