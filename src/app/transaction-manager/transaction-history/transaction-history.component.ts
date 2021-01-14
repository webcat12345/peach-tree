import { Component, OnInit } from '@angular/core';

import { Option } from '../../core/models/option';
import { Order, SortBy } from '../../core/enums/sort-by';
import { enumToOptions } from '../../core/utils/enum.util';
import { TransactionService } from '../../core/services/transaction.service';
import { Sort } from '../../core/models/sort';

@Component({
  selector: 'peach-tree-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  keyword = '';
  by: SortBy = null;
  order: Order = null;
  sortOptions: Option<SortBy>[] = enumToOptions(SortBy);
  transactions$ = this.transactionService.transactions$;

  constructor(
    private transactionService: TransactionService
  ) {
  }

  ngOnInit(): void {
    this.transactionService.loadTransactions();
  }

  sortChange(sort: Sort) {
    this.by = sort.by;
    this.order = sort.order;
  }

}
