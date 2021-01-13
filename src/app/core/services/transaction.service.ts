import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Merchant, Transaction, TransactionData } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    private http: HttpClient
  ) { }

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
          merchants = res.data.filter(item => item.merchant.toLowerCase().replace(/\s/g, '').includes(keywords))
        } else {
          merchants = res.data;
        }
        return merchants.map(item => ({
          categoryCode: item.categoryCode,
          merchant: item.merchant,
          merchantLogo: item.merchantLogo,
        }));
      })
    );
  }
}
