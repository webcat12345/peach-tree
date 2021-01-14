import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { TransferFormComponent } from './transfer-form.component';
import { DEFAULT_BALANCE, TransactionService } from '../../core/services/transaction.service';
import { expectedTransactions } from '../../mock/transactions.mock';
import { Transaction } from '../../core/models/transaction';
import { AlertService } from '../../ui-kit/alert/alert.service';
import { InputModule } from '../../ui-kit/input/input.module';

describe('TransferFormComponent', () => {
  let component: TransferFormComponent;
  let fixture: ComponentFixture<TransferFormComponent>;
  let transactionServiceStub: Partial<TransactionService>;
  let alertServiceStub: Partial<AlertService>;

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
      declarations: [TransferFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        InputModule,
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        CurrencyPipe,
        { provide: TransactionService, useValue: transactionServiceStub },
        { provide: AlertService, useValue: alertServiceStub },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
