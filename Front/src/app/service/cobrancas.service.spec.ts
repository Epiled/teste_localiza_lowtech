/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CobrancasService } from './cobrancas.service';

describe('Service: Cobrancas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CobrancasService]
    });
  });

  it('should ...', inject([CobrancasService], (service: CobrancasService) => {
    expect(service).toBeTruthy();
  }));
});
