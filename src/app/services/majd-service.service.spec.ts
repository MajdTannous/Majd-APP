import { TestBed, inject } from '@angular/core/testing';

import { MajdServiceService } from './majd-service.service';

describe('MajdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MajdServiceService]
    });
  });

  it('should be created', inject([MajdServiceService], (service: MajdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
