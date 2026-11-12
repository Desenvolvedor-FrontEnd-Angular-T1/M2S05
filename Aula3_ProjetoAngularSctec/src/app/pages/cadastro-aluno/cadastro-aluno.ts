// cadastro-aluno.ts - FORMULÁRIO REATIVO (Reactive Forms): a estrutura do form é criada AQUI no TypeScript.
// Criado com: ng generate component pages/cadastro-aluno
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../../models/aluno';
import { Endereco } from '../../models/endereco';
import { CepPipe } from '../../pipes/cep-pipe';
import { CepService } from '../../services/cep-service';

@Component({
  selector: 'app-cadastro-aluno',
  // TODO 4 (PIPES) - parte B: acrescente UpperCasePipe, DatePipe e CepPipe neste array (os imports do topo já estão prontos).
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.css',
})
export class CadastroAluno {
  // INJEÇÃO DE DEPENDÊNCIA: o Angular entrega prontos o FormBuilder e o nosso CepService.
  private fb = inject(NonNullableFormBuilder);
  private cepService = inject(CepService);

  // Opções do <select> de curso (usadas com @for no HTML).
  readonly cursos = ['Angular', 'React', 'Java', 'Python', 'Banco de Dados'];

  // TODO 3 (REACTIVE FORMS): troque a linha "form = this.fb.group({});" pelo grupo com os 5 campos:
  //   form = this.fb.group({
  //     nome:     ['', [Validators.required, Validators.minLength(3)]],
  //     email:    ['', [Validators.required, Validators.email]],
  //     telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
  //     curso:    ['', Validators.required],
  //     cep:      ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
  //   });
  // Os nomes (nome, email, telefone, curso, cep) precisam ser IGUAIS aos formControlName do HTML.
  form = this.fb.group({});

  // Estado da tela com signals (o HTML atualiza sozinho quando o valor muda).
  alunoSalvo = signal<Aluno | null>(null);
  endereco = signal<Endereco | null>(null);
  carregando = signal(false);
  erroCep = signal('');

  // true quando o campo está inválido E o usuário já passou por ele (usado para mostrar as mensagens de erro).
  invalido(campo: string): boolean {
    const controle = this.form.get(campo);
    return !!controle && controle.invalid && controle.touched;
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const dados = this.form.getRawValue() as Omit<Aluno, 'cadastradoEm'>;
    this.alunoSalvo.set({ ...dados, cadastradoEm: new Date() });
  }

  limpar(): void {
    this.form.reset();
    this.alunoSalvo.set(null);
    this.endereco.set(null);
    this.erroCep.set('');
  }

  // Chamado pelo botão "Buscar CEP".
  buscarCep(): void {
    const cep = String(this.form.get('cep')?.value ?? '').replace(/\D/g, ''); // deixa só os números
    this.endereco.set(null);
    this.erroCep.set('');

    if (cep.length !== 8) {
      this.erroCep.set('Digite um CEP com 8 números.');
      return;
    }

    // TODO 5 (API) - parte B: APAGUE a linha "this.erroCep.set('A busca...')" abaixo e escreva no lugar:
    //   this.carregando.set(true);
    //   this.cepService.buscar(cep).subscribe({
    //     next: (resposta) => {
    //       this.carregando.set(false);
    //       if (resposta.erro) {
    //         this.erroCep.set('CEP não encontrado.');
    //         return;
    //       }
    //       this.endereco.set(resposta);
    //     },
    //     error: () => {
    //       this.carregando.set(false);
    //       this.erroCep.set('Não foi possível consultar o CEP. Verifique a internet.');
    //     },
    //   });
    // Lembre: sem .subscribe() a requisição NÃO sai (Observable é "preguiçoso").
    this.erroCep.set('A busca de CEP ainda não foi conectada: faça o TODO 5.');
  }
}
