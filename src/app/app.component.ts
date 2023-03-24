import { Component } from '@angular/core';
import { DropdownOption } from './models/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-ui';
  onOptionSelected(option: DropdownOption) {
    console.log('selected option ', option)
  }
}
