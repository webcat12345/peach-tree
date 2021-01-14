import { FilterPipe } from './filter.pipe';
import { expectedTransactions } from '../../mock/transactions.mock';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return Amazon Online Store when keyword is `amazon`', () => {
    const pipe = new FilterPipe();
    const data = pipe.transform(expectedTransactions.data, 'amazon');
    expect(data.length).toBe(1);
    expect(data[0].merchant).toBe('Amazon Online Store');
  });

  it('should return empty array when keyword is not matching', () => {
    const pipe = new FilterPipe();
    const data = pipe.transform(expectedTransactions.data, 'ooooo');
    expect(data.length).toBe(0);
  });

  it('should return all when keyword is empty', () => {
    const pipe = new FilterPipe();
    const data = pipe.transform(expectedTransactions.data, '');
    expect(data.length).toBe(expectedTransactions.data.length);
  });
});
