import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AlertService } from './alert.service';
import { AlertModalComponent } from './alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  providers: [
    AlertService
  ]
})
export class AlertModule {
  static forRoot(): ModuleWithProviders<AlertModule> {
    return {
      ngModule: AlertModule,
      providers: [ AlertService ]
    };
  }
}
