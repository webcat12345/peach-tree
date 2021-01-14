import { Pipe, PipeTransform } from '@angular/core';

import { Transaction } from '../../core/models/transaction';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(transactions: Transaction[], keyword: string): Transaction[] {
    return transactions.filter(item => (item.merchant + item.transactionType).toLowerCase().includes(keyword.toLowerCase()));
  }

}
