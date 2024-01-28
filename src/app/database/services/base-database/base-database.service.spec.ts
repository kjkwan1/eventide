import { TestBed } from '@angular/core/testing';

import { BaseDatabaseService } from './base-database.service';

describe('BaseDatabaseService', () => {
  let service: BaseDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
