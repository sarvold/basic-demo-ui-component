import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UiDropdownComponent } from './ui-dropdown.component';

describe('UiDropdownComponent', () => {
  let component: UiDropdownComponent;
  let fixture: ComponentFixture<UiDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display dropdown element', () => {
    expect(component).toBeTruthy();
  });
});

class PageObject {
  constructor(private fixture: ComponentFixture<UiDropdownComponent>) {}

  get dropdown(): DebugElement {
    return this.fixture.debugElement.query(By.css('form'));
  }
}
