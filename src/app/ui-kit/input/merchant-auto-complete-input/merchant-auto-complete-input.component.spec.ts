import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { MerchantAutoCompleteInputComponent } from './merchant-auto-complete-input.component';
import { DEFAULT_BALANCE, TransactionService } from '../../../core/services/transaction.service';
import { expectedTransactions } from '../../../mock/transactions.mock';
import { Transaction } from '../../../core/models/transaction';

describe('MerchantAutoCompleteInputComponent', () => {
  let component: MerchantAutoCompleteInputComponent;
  let fixture: ComponentFixture<MerchantAutoCompleteInputComponent>;
  let transactionServiceStub: Partial<TransactionService>;

  transactionServiceStub = {
    balance$: new BehaviorSubject<number>(DEFAULT_BALANCE),
    transactions: expectedTransactions.data,
    transactions$: new BehaviorSubject<Transaction[]>(expectedTransactions.data),
    transferMoney(transaction: Transaction): Observable<boolean> {
      this.transactions = [transaction, ...this.transactions];
      return of(true);
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantAutoCompleteInputComponent ],
      providers: [
        { provide: TransactionService, useValue: transactionServiceStub },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantAutoCompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
