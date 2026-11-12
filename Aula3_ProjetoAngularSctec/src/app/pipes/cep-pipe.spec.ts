// cep-pipe.spec.ts - teste do pipe (roda com: ng test).
import { CepPipe } from './cep-pipe';

describe('CepPipe', () => {
  it('deve criar uma instância', () => {
    const pipe = new CepPipe();
    expect(pipe).toBeTruthy();
  });
});
