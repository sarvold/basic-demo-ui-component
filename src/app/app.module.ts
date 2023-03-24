import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiControlsComponent } from './ui-controls/ui-controls.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';

@NgModule({
  declarations: [AppComponent, UiDropdownComponent, UiControlsComponent],
  imports: [
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
