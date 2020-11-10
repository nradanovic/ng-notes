import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDisplayStates, AppStateService } from '../../core/services/app-state/app-state.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesComponent {

  public appStates = AppDisplayStates;

  constructor(public appStateService: AppStateService) { }

}
