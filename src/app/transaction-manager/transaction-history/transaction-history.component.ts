import { Component, OnInit } from '@angular/core';

import { Option } from '../../core/models/option';
import { SortBy } from '../../core/enums/sort-by';
import { enumToOptions } from '../../core/utils/enum.util';
import { TransactionService } from '../../core/services/transaction.service';
import { Transaction } from '../../core/models/transaction';

@Component({
  selector: 'peach-tree-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  sortOptions: Option<SortBy>[] = enumToOptions(SortBy);
  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  private async getTransactions() {
    try {
      this.transactions = await this.transactionService.getTransactions().toPromise();
    } catch (e) {

    } finally {

    }
  }


}
