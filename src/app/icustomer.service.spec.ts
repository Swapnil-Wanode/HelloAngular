import { TestBed } from '@angular/core/testing';

import { IcustomerService } from './icustomer.service';

describe('IcustomerService', () => {
  let service: IcustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
