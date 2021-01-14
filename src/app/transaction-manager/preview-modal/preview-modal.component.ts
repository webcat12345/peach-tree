import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Transaction } from '../../core/models/transaction';
import { TransactionService } from '../../core/services/transaction.service';

@Component({
  selector: 'peach-tree-preview-modal',
  templateUrl: './preview-modal.component.html',
  styleUrls: ['./preview-modal.component.scss']
})
export class PreviewModalComponent implements OnInit {

  balance$ = this.transactionService.balance$;
  transaction: Transaction;

  constructor(
    private transactionService: TransactionService,
    public activeModal: NgbActiveModal,
  ) {
  }

  ngOnInit(): void {
  }

  async transfer() {
    try {
      await this.transactionService.transferMoney(this.transaction).toPromise();
      this.activeModal.close(true);
    } catch (e) {
      console.log(e);
    }
  }

}
