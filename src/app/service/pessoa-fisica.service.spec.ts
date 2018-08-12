import { TestBed, inject } from '@angular/core/testing';

import { PessoaFisicaService } from './pessoa-fisica.service';

describe('PessoaFisicaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PessoaFisicaService]
    });
  });

  it('should be created', inject([PessoaFisicaService], (service: PessoaFisicaService) => {
    expect(service).toBeTruthy();
  }));
});
