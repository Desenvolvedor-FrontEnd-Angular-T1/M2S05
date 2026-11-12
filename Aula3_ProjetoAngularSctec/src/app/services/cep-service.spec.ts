// cep-service.spec.ts - teste do service (roda com: ng test).
import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CepService } from './cep-service';

describe('CepService', () => {
  let service: CepService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(CepService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});
