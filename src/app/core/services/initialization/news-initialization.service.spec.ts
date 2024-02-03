import { TestBed } from '@angular/core/testing';

import { NewsInitializationService } from './news-initialization.service';

describe('NewsInitializationService', () => {
  let service: NewsInitializationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsInitializationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
