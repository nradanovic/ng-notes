import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

export interface Notes {
  position: number;
  content: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private localStorageKey = 'Notes';
  private notes$ = new BehaviorSubject<Map<number, string>>(new Map());

  constructor(private localStorageService: LocalStorageService) {
    this.loadNotesFromLocalStorage();
    this.saveNotesToLocalStorageOnNotesChange();
  }

  private loadNotesFromLocalStorage(): void {
    const savedNotes = this.localStorageService.getItem<[number, string][]>(
      this.localStorageKey
    );
    if (savedNotes) {
      this.notes$.next(new Map(savedNotes));
    }
  }

  private saveNotesToLocalStorageOnNotesChange(): void {
    this.notes$.subscribe((notes) =>
      this.localStorageService.setItem<[number, string][]>(
        this.localStorageKey,
        [...notes]
      )
    );
  }

  public addNote(note: string): number {
    const newNoteid = Date.now();
    const newNotesMap = this.notes$.value.set(newNoteid, note);
    this.notes$.next(newNotesMap);
    return newNoteid;
  }

  public updateNote(id: number, updatedNote: string) {
    const newNotesMap = this.notes$.value.set(id, updatedNote);
    this.notes$.next(newNotesMap);
  }

  public deleteNote(id: number) {
    const newNotesMap = this.notes$.value;
    newNotesMap.delete(id);
    this.notes$.next(newNotesMap);
  }

  public getNotes(): Observable<Map<number, string>> {
    return this.notes$.asObservable();
  }

  public getNote(id: number): string {
    return this.notes$.value.get(id);
  }
}
