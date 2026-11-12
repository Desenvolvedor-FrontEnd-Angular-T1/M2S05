// cadastro-aluno.spec.ts - teste do componente (roda com: ng test).
// provideHttpClient() é necessário porque o componente usa o CepService, que usa o HttpClient.
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAluno } from './cadastro-aluno';

describe('CadastroAluno', () => {
  let component: CadastroAluno;
  let fixture: ComponentFixture<CadastroAluno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroAluno],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroAluno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});
