import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Merchant } from '../../../core/models/transaction';
import { TransactionService } from '../../../core/services/transaction.service';

@Component({
  selector: 'peach-tree-merchant-auto-complete-input',
  templateUrl: './merchant-auto-complete-input.component.html',
  styleUrls: ['./merchant-auto-complete-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MerchantAutoCompleteInputComponent),
      multi: true,
    }
  ]
})
export class MerchantAutoCompleteInputComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() placeholder = '';
  @Input() value;

  onChange;
  formatter = (result: Merchant) => result.merchant;
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => term.length < 2 ? of([]) : this.transactionService.searchAvailableMerchants(term))
    )

  constructor(
    private transactionService: TransactionService
  ) {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  change(value): void {
    if (this.onChange) {
      this.onChange(value);
    }
  }

}
