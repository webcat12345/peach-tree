import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TransactionService } from '../../core/services/transaction.service';
import { Merchant, Transaction } from '../../core/models/transaction';
import { randomFromEnum } from '../../core/utils/enum.util';
import { CategoryCode, TransactionType } from '../../core/enums/transaction';

@Component({
  selector: 'peach-tree-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {

  balance = 5824.76; // Predefined balance

  form: FormGroup = this.fb.group({
    toAccount: ['', Validators.required],
    amount: [0, Validators.min(1)]
  });
  merchants: Merchant[] = [];

  constructor(
    private transactionService: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllMerchants();
  }

  private async getAllMerchants() {
    try {
      this.merchants = await this.transactionService.searchAvailableMerchants(null).toPromise();
    } catch (e) {

    } finally {

    }
  }

  async submit() {
    try {
      const value = this.form.value;

      const payload: Transaction = {
        merchant: typeof value.toAccount === 'string' ? value.toAccount : value.toAccount.merchant,
        amount: value.amount,
        categoryCode: typeof value.toAccount === 'string' ? randomFromEnum<CategoryCode>(CategoryCode) : value.toAccount.categoryCode,
        merchantLogo: typeof value.toAccount === 'string' ? null : value.toAccount.merchantLogo,
        transactionDate: new Date().getTime(),
        transactionType: randomFromEnum<TransactionType>(TransactionType)
      };
      console.log(payload);
    } catch (e) {
      console.log(e);
    } finally {

    }
  }

}
