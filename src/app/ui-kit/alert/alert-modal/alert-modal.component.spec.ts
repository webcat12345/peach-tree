import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AlertModalComponent } from './alert-modal.component';

describe('AlertModalComponent', () => {
  let component: AlertModalComponent;
  let fixture: ComponentFixture<AlertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertModalComponent ],
      imports: [
        NgbModalModule
      ],
      providers: [
        NgbActiveModal
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
