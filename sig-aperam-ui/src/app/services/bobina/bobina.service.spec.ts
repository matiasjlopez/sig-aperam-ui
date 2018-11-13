import { TestBed, inject } from '@angular/core/testing';

import { BobinaService } from './bobina.service';

describe('BobinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BobinaService]
    });
  });

  it('should be created', inject([BobinaService], (service: BobinaService) => {
    expect(service).toBeTruthy();
  }));
});
