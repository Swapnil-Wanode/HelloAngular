import { TestBed } from '@angular/core/testing';

import { IseedService } from './iseed.service';

describe('IseedService', () => {
  let service: IseedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IseedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
