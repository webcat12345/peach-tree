import { Component, Input, OnInit } from '@angular/core';

import { Transaction } from '../../core/models/transaction';

@Component({
  selector: 'peach-tree-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {

  @Input() transactions: Transaction[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
