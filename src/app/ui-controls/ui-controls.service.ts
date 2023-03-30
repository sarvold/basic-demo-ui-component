import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AppModule } from '../app.module';
import { DropdownOption } from '../models/dropdown';

@Injectable({
  providedIn: 'root',
})
export class UiControlsService {
  public placeholder$: Subject<string> = new Subject();
  public dropdownOptions$: Subject<DropdownOption[]> = new Subject();
  public selectedOption$: Subject<DropdownOption> = new Subject();
}
