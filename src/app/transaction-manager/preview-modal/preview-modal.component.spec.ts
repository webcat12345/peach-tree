import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { PreviewModalComponent } from './preview-modal.component';
import { DEFAULT_BALANCE, TransactionService } from '../../core/services/transaction.service';
import { Transaction } from '../../core/models/transaction';
import { expectedTransactions } from '../../mock/transactions.mock';
import { CategoryCode, TransactionType } from '../../core/enums/transaction';

describe('PreviewModalComponent', () => {
  let component: PreviewModalComponent;
  let fixture: ComponentFixture<PreviewModalComponent>;
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
      declarations: [PreviewModalComponent],
      providers: [
        { provide: TransactionService, useValue: transactionServiceStub },
        NgbActiveModal
      ],
      imports: [
        NgbModalModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewModalComponent);
    component = fixture.componentInstance;
    component.transaction = {
      amount: 500,
      categoryCode: CategoryCode.BuddhaGold,
      merchant: 'The Dummy Company',
      merchantLogo: null,
      transactionDate: new Date().getTime(),
      transactionType: TransactionType.CardPayment
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the transfer api when submit button is clicked', () => {
    component.transfer();
    expect(transactionServiceStub.transactions.length).toBe(expectedTransactions.data.length + 1, 'transfer should be logged');
  });
});
