import { TestBed } from '@angular/core/testing';

import { LibrasService } from './libras.service';

describe('LibrasService', () => {
  let service: LibrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
