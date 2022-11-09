import { TestBed } from '@angular/core/testing';

import { UrlshortenerService } from './urlshortener.service';

describe('UrlshortenerService', () => {
  let service: UrlshortenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlshortenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
