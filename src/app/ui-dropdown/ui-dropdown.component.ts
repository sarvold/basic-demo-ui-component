import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map, Subscription, takeUntil, tap } from 'rxjs';
import { UiControlsService } from 'src/app/ui-controls/ui-controls.service';
import { DropdownOption } from '../models/dropdown';

@Component({
  selector: 'ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.scss'],
})
export class UiDropdownComponent implements OnInit {
  private subscriptions = new Subscription();
  // YAGN, just for showing an alternative approach for unsubscribing:
  // private componentDestroy: Subject<boolean> = new Subject();

  placeholder: string = 'Select an option';
  options: DropdownOption[] = [];
  selectedOption: DropdownOption = {id: null, text: null};
  @Output() optionSelected = new EventEmitter<DropdownOption>();

  dropdownVisible = false;

  constructor(private uiControlsService: UiControlsService) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.uiControlsService.placeholder$
        .pipe(
          tap((p: string) => {
            this.placeholder = p;
          })
          // takeUntil(this.componentDestroy),
        )
        .subscribe()
    );
    this.subscriptions.add(
      this.uiControlsService.dropdownOptions$
        .pipe(
          tap((options: DropdownOption[]) => {
            this.options = options;
          })
          // takeUntil(this.componentDestroy),
        )
        .subscribe()
    );
    this.subscriptions.add(
      this.uiControlsService.selectedOption$
      .pipe(
        filter((option: DropdownOption) => {
          return this.selectedOption.id !== option.id;
        }),
        tap((option: DropdownOption) => {
          this.selectOption(option);
        }),
      )
      .subscribe()
    );
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectOption(option: DropdownOption) {
    if(this.selectedOption.id !== option.id) {
      this.selectedOption = option;
      this.optionSelected.emit(option);
      this.uiControlsService.selectedOption$.next(option);
    }
    this.dropdownVisible = false;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    // this.componentDestroy.next(true);
    // this.componentDestroy.complete();
  }
}
