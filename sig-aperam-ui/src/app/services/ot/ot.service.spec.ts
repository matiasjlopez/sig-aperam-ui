import { TestBed, inject } from '@angular/core/testing';

import { OtService } from './ot.service';

describe('OtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtService]
    });
  });

  it('should be created', inject([OtService], (service: OtService) => {
    expect(service).toBeTruthy();
  }));
});
