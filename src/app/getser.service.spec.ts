import { TestBed, inject } from '@angular/core/testing';

import { GetserService } from './getser.service';

describe('GetserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetserService]
    });
  });

  it('should be created', inject([GetserService], (service: GetserService) => {
    expect(service).toBeTruthy();
  }));
});
