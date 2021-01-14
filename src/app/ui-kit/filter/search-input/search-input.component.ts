import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'peach-tree-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Input() debounce = 200;
  @Output() keywordChange: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup = this.fb.group({
    keyword: ''
  });

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.get('keyword').valueChanges.pipe(
      takeUntil(this.unsubscribeAll),
      debounceTime(this.debounce)
    ).subscribe(value => {
      this.keywordChange.emit(value);
    });
  }

  ngOnDestroy() {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  clean() {
    this.form.get('keyword').setValue('');
  }

}
