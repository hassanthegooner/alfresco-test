import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { ChipsComponent } from './chips.component';

describe('ChipsComponent', () => {

  let component: ChipsComponent;
  let fixture: ComponentFixture<ChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsComponent],
      imports: [
        MatChipsModule,
        MatIconModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete user correctly', () => {
    expect(component.userData.list.entries.length).toBe(4);
    component.remove(1);
    expect(component.userData.list.entries.length).toBe(3);
    fixture.detectChanges();
    const parentDe: DebugElement = fixture.debugElement;
    const parentEl: HTMLElement = parentDe.nativeElement;
    const domItems = Array.from(parentEl.querySelectorAll('mat-chip'));
    expect(domItems.length).toBe(3);
  });

});
