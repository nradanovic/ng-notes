import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNotesGridComponent } from './app-notes-grid.component';

describe('AppNotesGridComponent', () => {
  let component: AppNotesGridComponent;
  let fixture: ComponentFixture<AppNotesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNotesGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNotesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
