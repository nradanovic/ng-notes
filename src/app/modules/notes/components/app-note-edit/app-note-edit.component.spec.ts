import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNoteEditComponent } from './app-note-edit.component';

describe('AppNoteEditComponent', () => {
  let component: AppNoteEditComponent;
  let fixture: ComponentFixture<AppNoteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNoteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
