import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class UiControlsService {
  public placeholder$: Subject<string> = new Subject();
  public dropdownOptions$: Subject<string[]> = new Subject();
}
