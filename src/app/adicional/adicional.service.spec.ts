import { TestBed, inject } from '@angular/core/testing';

import { AdicionalService } from './adicional.service';

describe('CategoriaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdicionalService]
    });
  });

  it('should be created', inject([AdicionalService], (service: AdicionalService) => {
    expect(service).toBeTruthy();
  }));
});