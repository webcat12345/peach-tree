import { Component, Input, OnInit } from '@angular/core';

import { Option } from '../../../core/models/option';
import { Order } from '../../../core/enums/sort-by';

@Component({
  selector: 'peach-tree-sort-group',
  templateUrl: './sort-group.component.html',
  styleUrls: ['./sort-group.component.scss']
})
export class SortGroupComponent implements OnInit {

  @Input() options: Option<any>[] = [];

  Order = Order;
  filter: { by: any, order: Order } = { by: null, order: null };

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(option) {
    // Requirement: The Sorting order (ascending/descending) should be persistent across all sorting options;
    // i.e. If you are sorting by beneficiary ASC and switch the sorting option to Amount, the sorting order should stay ASC
    if (this.filter.by === option) {
      this.filter.order = this.filter.order === Order.Ascending ? Order.Descending : Order.Ascending;
    } else {
      if (!this.filter.by) {
        this.filter.order = Order.Ascending;
      }
      this.filter.by = option;
    }
  }

}
