import { TestBed, inject } from '@angular/core/testing';

import { OcService } from './oc.service';

describe('OcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcService]
    });
  });

  it('should be created', inject([OcService], (service: OcService) => {
    expect(service).toBeTruthy();
  }));
});
