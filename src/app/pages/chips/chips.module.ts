import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ChipsComponent } from './chips.component';
import { routing } from './chips.routing';

@NgModule({
  declarations: [ChipsComponent],
  imports: [
    CommonModule,
    routing,
    MatChipsModule,
    MatIconModule
  ]
})
export class ChipsModule { }
