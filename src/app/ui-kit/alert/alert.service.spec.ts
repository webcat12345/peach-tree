import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
  let service: AlertService;
  let modalServiceSpy: { open: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    modalServiceSpy = jasmine.createSpyObj('NgbModal', ['open']);
    modalServiceSpy.open.and.returnValue(null);
    service = new AlertService(modalServiceSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
