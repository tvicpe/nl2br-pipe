import { TestBed } from '@angular/core/testing';

import { Nl2brService } from './nl2br.service';

describe('Nl2brService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Nl2brService = TestBed.get(Nl2brService);
    expect(service).toBeTruthy();
  });
});
