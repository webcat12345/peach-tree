import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../input/input.module';

import { SortGroupComponent } from './sort-group/sort-group.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    SortGroupComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule
  ],
  exports: [
    SortGroupComponent,
    SearchInputComponent
  ]
})
export class FilterModule { }
