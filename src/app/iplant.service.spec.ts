import { TestBed } from '@angular/core/testing';

import { IplantService } from './iplant.service';

describe('IplantService', () => {
  let service: IplantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IplantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
