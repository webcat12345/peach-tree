import { Pipe, PipeTransform } from '@angular/core';

import { Transaction } from '../../core/models/transaction';
import { Order, SortBy } from '../../core/enums/sort-by';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(transactions: Transaction[], by: SortBy, order: Order): unknown {
    if (by && order) {
      const high = order === Order.Descending ? -1 : 1;
      const low = order === Order.Descending ? 1 : -1;
      transactions.sort((a, b) => {
        let val1;
        let val2;
        if (by === SortBy.Date) {
          val1 = Number(a.transactionDate);
          val2 = Number(b.transactionDate);
        } else if (by === SortBy.Amount) {
          val1 = Number(a.amount);
          val2 = Number(b.amount);
        } else {
          // beneficiary order is just done using the merchant name because we don't have spot for sorting
          val1 = a.merchant;
          val2 = b.merchant;
        }
        return val1 < val2 ? high : low;
      });
    }
    return transactions;
  }

}
