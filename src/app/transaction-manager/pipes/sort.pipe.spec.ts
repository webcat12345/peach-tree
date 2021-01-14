import { SortPipe } from './sort.pipe';
import { expectedTransactions } from '../../mock/transactions.mock';
import { Order, SortBy } from '../../core/enums/sort-by';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return all when by or order is empty', () => {
    const pipe = new SortPipe();
    let data = pipe.transform(expectedTransactions.data, null, null);
    expect(data).toBe(expectedTransactions.data);
    data = pipe.transform(expectedTransactions.data, null, Order.Descending);
    expect(data).toBe(expectedTransactions.data);
    data = pipe.transform(expectedTransactions.data, SortBy.Amount, null);
    expect(data).toBe(expectedTransactions.data);
  });

  it('should return ordered list by category and order', () => {
    const pipe = new SortPipe();
    let data = pipe.transform(expectedTransactions.data, SortBy.Amount, Order.Descending);
    expect(data[0].amount < data[data.length - 1].amount).toBe(true);
    data = pipe.transform(expectedTransactions.data, SortBy.Amount, Order.Ascending);
    expect(data[0].amount > data[data.length - 1].amount).toBe(true);
    // skip other cases
  });
});
