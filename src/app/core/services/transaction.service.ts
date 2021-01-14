import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Merchant, Transaction, TransactionData } from '../models/transaction';

export const DEFAULT_BALANCE = 5824.76;
export const OVERDRAFT = -500.00;

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  balance = DEFAULT_BALANCE;
  balance$: BehaviorSubject<number> = new BehaviorSubject<number>(this.balance);

  transactions: Transaction[] = [];
  transactions$: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>(this.transactions);

  constructor(
    private http: HttpClient
  ) { }

  transferMoney(transaction: Transaction): Observable<boolean> {
    this.balance -= transaction.amount;
    this.balance$.next(this.balance);
    this.transactions = [transaction, ...this.transactions];
    this.transactions$.next(this.transactions);
    return of(true);
  }

  loadTransactions(): void {
    this.getTransactions().subscribe(res => {
      this.transactions = res;
      this.transactions$.next(this.transactions);
    });
  }

  validateAmount(amount: number): boolean {
    return this.balance - amount > OVERDRAFT;
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<TransactionData>('assets/data/transactions.json').pipe(
      map(res => res.data)
    );
  }

  searchAvailableMerchants(keywords?: string): Observable<Merchant[]> {
    return this.http.get<TransactionData>('assets/data/transactions.json').pipe(
      map((res: { data: Transaction[] }) => {
        let merchants = [];
        if (keywords) {
          merchants = res.data.filter(item => item.merchant.toLowerCase().replace(/\s/g, '').includes(keywords.toLowerCase()))
        } else {
          merchants = res.data;
        }
        return merchants
          .map(item => ({ // mapping only merchant information
            categoryCode: item.categoryCode,
            merchant: item.merchant,
            merchantLogo: item.merchantLogo,
          }))
          .filter((item, index, self) => self.findIndex(t => t.merchant === item.merchant) === index); // remove duplicates
      })
    );
  }
}
