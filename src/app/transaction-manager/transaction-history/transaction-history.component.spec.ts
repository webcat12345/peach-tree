import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TransactionHistoryComponent } from './transaction-history.component';
import { DEFAULT_BALANCE, TransactionService } from '../../core/services/transaction.service';
import { expectedTransactions } from '../../mock/transactions.mock';
import { Transaction } from '../../core/models/transaction';
import { FilterModule } from '../../ui-kit/filter/filter.module';
import { SortPipe } from '../pipes/sort.pipe';
import { FilterPipe } from '../pipes/filter.pipe';

describe('TransactionHistoryComponent', () => {
  let component: TransactionHistoryComponent;
  let fixture: ComponentFixture<TransactionHistoryComponent>;
  let transactionServiceStub: Partial<TransactionService>;

  transactionServiceStub = {
    balance$: new BehaviorSubject<number>(DEFAULT_BALANCE),
    transactions: expectedTransactions.data,
    transactions$: new BehaviorSubject<Transaction[]>(expectedTransactions.data),
    loadTransactions() {
      return;
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TransactionHistoryComponent,
        SortPipe,
        FilterPipe
      ],
      imports: [
        FilterModule,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        { provide: TransactionService, useValue: transactionServiceStub },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
