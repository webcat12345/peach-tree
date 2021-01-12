import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../ui-kit/input/input.module';
import { FilterModule } from '../ui-kit/filter/filter.module';

import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';

@NgModule({
  declarations: [
    TransferFormComponent,
    TransactionHistoryComponent,
    TransactionTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    FilterModule
  ],
  exports: [
    TransferFormComponent,
    TransactionHistoryComponent
  ]
})
export class TransactionManagerModule { }
