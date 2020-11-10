import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotePreviewComponent } from './app-note-preview.component';

describe('AppNotePreviewComponent', () => {
  let component: AppNotePreviewComponent;
  let fixture: ComponentFixture<AppNotePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNotePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNotePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
