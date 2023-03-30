import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { DropdownOption } from '../models/dropdown';
import { UiControlsService } from '../ui-controls/ui-controls.service';

import { UiDropdownComponent } from './ui-dropdown.component';

describe('UiDropdownComponent', () => {
  let component: UiDropdownComponent;
  let fixture: ComponentFixture<UiDropdownComponent>;
  let uiControlsService: UiControlsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiDropdownComponent],
      providers: [UiControlsService],
    }).compileComponents();

    fixture = TestBed.createComponent(UiDropdownComponent);
    component = fixture.componentInstance;
    uiControlsService = TestBed.inject(UiControlsService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display dropdown element', () => {
    const page = new PageObject(fixture);
    expect(page.dropdown).toBeTruthy();
  });

  it('should show placeholder if no option is selected', () => {
    const page = new PageObject(fixture);
    const placeholder = 'Select an option';
    component.placeholder = placeholder;
    fixture.detectChanges();
    const dropdownToggle = page.dropdown.query(By.css('.dropdown-toggle')).nativeElement;
    expect(dropdownToggle.innerText.trim()).toEqual(placeholder);
  });

  it('should show selected option if an option is selected', () => {
    const page = new PageObject(fixture);
    const selectedOption: DropdownOption = { id: '1', text: 'Option 1' };
    component.selectedOption = selectedOption;
    fixture.detectChanges();
    const dropdownToggle = page.dropdown.query(By.css('.dropdown-toggle')).nativeElement;
    expect(dropdownToggle.innerText.trim()).toEqual(selectedOption.text);
  });
});
class PageObject {
  constructor(private fixture: ComponentFixture<UiDropdownComponent>) {}

  get dropdown(): DebugElement {
    return this.fixture.debugElement.query(By.css('form'));
  }
}
