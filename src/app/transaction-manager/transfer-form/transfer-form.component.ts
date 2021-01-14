import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertService } from '../../ui-kit/alert/alert.service';
import { OVERDRAFT, TransactionService } from '../../core/services/transaction.service';
import { Transaction } from '../../core/models/transaction';
import { randomFromEnum } from '../../core/utils/enum.util';
import { CategoryCode, TransactionType } from '../../core/enums/transaction';
import { PreviewModalComponent } from '../preview-modal/preview-modal.component';

@Component({
  selector: 'peach-tree-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {

  @ViewChild('formRef') formRef: ElementRef;

  balance$ = this.transactionService.balance$;
  form: FormGroup = this.fb.group({
    toAccount: ['', Validators.required],
    amount: [0, Validators.min(1)]
  });

  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private alertService: AlertService,
    private currencyPipe: CurrencyPipe,
  ) {
  }

  ngOnInit(): void {
  }

  async submit(): Promise<any> {
    try {
      const value = this.form.value;
      if (!this.transactionService.validateAmount(value.amount)) { // overdraft is limited to -500 USD
        this.alertService.alert('Warning', `You shouldn't be able to overdraft your account beyond a balance of ${ this.currencyPipe.transform(OVERDRAFT) }.`);
        return;
      }
      const payload: Transaction = {
        merchant: typeof value.toAccount === 'string' ? value.toAccount : value.toAccount.merchant,
        amount: value.amount,
        categoryCode: typeof value.toAccount === 'string' ? randomFromEnum<CategoryCode>(CategoryCode) : value.toAccount.categoryCode,
        merchantLogo: typeof value.toAccount === 'string' ? null : value.toAccount.merchantLogo,
        transactionDate: new Date().getTime(),
        transactionType: randomFromEnum<TransactionType>(TransactionType)
      };
      this.formRef.nativeElement.ownerDocument.activeElement.blur(); // HOTFIX: https://github.com/angular/angular/issues/22426
      const modalRef = this.modalService.open(PreviewModalComponent); // preview dialog should be opened
      modalRef.componentInstance.transaction = payload;
      modalRef.closed.subscribe(res => {
        if (res) { // reset transfer form after the successful transfer
          this.form.get('toAccount').setValue('');
          this.form.get('amount').setValue(0);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

}
