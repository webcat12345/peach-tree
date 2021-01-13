import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantAutoCompleteInputComponent } from './merchant-auto-complete-input.component';

describe('MerchantAutoCompleteInputComponent', () => {
  let component: MerchantAutoCompleteInputComponent;
  let fixture: ComponentFixture<MerchantAutoCompleteInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantAutoCompleteInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantAutoCompleteInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
