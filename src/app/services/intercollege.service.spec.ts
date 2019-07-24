import { TestBed, inject } from '@angular/core/testing';

import { IntercollegeService } from './intercollege.service';

describe('IntercollegeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntercollegeService]
    });
  });

  it('should be created', inject([IntercollegeService], (service: IntercollegeService) => {
    expect(service).toBeTruthy();
  }));
});
