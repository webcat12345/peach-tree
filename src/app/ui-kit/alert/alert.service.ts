import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertModalComponent } from './alert-modal/alert-modal.component';

@Injectable()
export class AlertService {

  constructor(
    private modalService: NgbModal
  ) { }

  alert(title: string, content: string): void {
    const modal = this.modalService.open(AlertModalComponent);
    modal.componentInstance.title = title;
    modal.componentInstance.content = content;
  }
}
