import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { TextInputComponent } from './text-input/text-input.component';
import { MerchantAutoCompleteInputComponent } from './merchant-auto-complete-input/merchant-auto-complete-input.component';

@NgModule({
  declarations: [
    TextInputComponent,
    MerchantAutoCompleteInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
  ],
  exports: [
    TextInputComponent,
    MerchantAutoCompleteInputComponent
  ]
})
export class InputModule {
}
