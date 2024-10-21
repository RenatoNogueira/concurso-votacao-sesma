import { TestBed } from '@angular/core/testing';

import { CandidatoService } from './candidatos.service';

describe('CandidatosService', () => {
  let service: CandidatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatoService);
  });

  it('Deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});
