import { TestBed } from '@angular/core/testing';

import { IplanterService } from './iplanter.service';

describe('IplanterService', () => {
  let service: IplanterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IplanterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
