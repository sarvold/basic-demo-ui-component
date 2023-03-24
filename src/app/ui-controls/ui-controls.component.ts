import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiControlsService } from './ui-controls.service';

@Component({
  selector: 'ui-controls',
  templateUrl: './ui-controls.component.html',
  styleUrls: ['./ui-controls.component.scss'],
})
export class UiControlsComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  uiForm: FormGroup;
  get formOptions(): FormArray {
    return this.uiForm.get('options') as FormArray;
  }
  constructor(
    private uiControlsService: UiControlsService,
    private fb: FormBuilder
  ) {
    this.uiForm = this.fb.group({
      placeholder: [''],
      options: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.uiForm
        .get('placeholder')
        ?.valueChanges.subscribe((placeholder: string) => {
          this.uiControlsService.placeholder$.next(placeholder);
        })
    );
    this.subscriptions.add(
      this.uiForm
        .get('options')
        ?.valueChanges.subscribe((options: string[]) => {
          this.uiControlsService.dropdownOptions$.next(options);
        })
    );
  }

  addOption(): void {
    const optionsArray = this.uiForm.get('options') as FormArray;
    optionsArray.push(this.fb.control(''));
  }

  removeOption(index: number): void {
    const optionsArray = this.uiForm.get('options') as FormArray;
    optionsArray.removeAt(index);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
