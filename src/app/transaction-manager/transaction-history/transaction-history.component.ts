import { Component, OnInit } from '@angular/core';

import { Option } from '../../core/models/option';
import { SortBy } from '../../core/enums/sort-by';
import { enumToOptions } from '../../core/utils/enum.util';

@Component({
  selector: 'peach-tree-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

  sortOptions: Option<SortBy>[] = enumToOptions(SortBy);

  constructor() { }

  ngOnInit(): void {
  }

}
