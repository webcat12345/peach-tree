import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { InputModule } from '../ui-kit/input/input.module';
import { FilterModule } from '../ui-kit/filter/filter.module';
import { AlertModule } from '../ui-kit/alert/alert.module';

import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { TransactionTableComponent } from './transaction-table/transaction-table.component';
import { PreviewModalComponent } from './preview-modal/preview-modal.component';

@NgModule({
  declarations: [
    TransferFormComponent,
    TransactionHistoryComponent,
    TransactionTableComponent,
    PreviewModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    InputModule,
    FilterModule,
    AlertModule.forRoot()
  ],
  exports: [
    TransferFormComponent,
    TransactionHistoryComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class TransactionManagerModule { }
