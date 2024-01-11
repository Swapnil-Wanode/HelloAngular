import { TestBed } from '@angular/core/testing';

import { IorderService } from './iorder.service';

describe('IorderService', () => {
  let service: IorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
