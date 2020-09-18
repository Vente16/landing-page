import { TestBed } from '@angular/core/testing';

import { TecnologyService } from './tecnology.service';

describe('TecnologyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TecnologyService = TestBed.get(TecnologyService);
    expect(service).toBeTruthy();
  });
});
