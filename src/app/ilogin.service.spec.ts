import { TestBed } from '@angular/core/testing';

import { IloginService } from './ilogin.service';

describe('IloginService', () => {
  let service: IloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
