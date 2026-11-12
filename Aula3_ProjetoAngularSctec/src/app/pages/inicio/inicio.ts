// inicio.ts - página inicial: apresenta o projeto e o roteiro da aula. JÁ ESTÁ PRONTA.
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Passo {
  todo: number;
  titulo: string;
  descricao: string;
  arquivos: string[];
}

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  // Lista exibida com @for no inicio.html (dados no .ts, tela no .html).
  protected readonly passos: Passo[] = [
    { todo: 1, titulo: 'Rotas', descricao: 'Criar as rotas /contato e /cadastro.', arquivos: ['app.routes.ts'] },
    { todo: 2, titulo: 'Form Template-Driven', descricao: 'Digitar o formulário de contato (3 campos) com ngModel.', arquivos: ['pages/contato/contato.html'] },
    { todo: 3, titulo: 'Reactive Forms', descricao: 'Montar o fb.group com 5 campos e validações.', arquivos: ['pages/cadastro-aluno/cadastro-aluno.ts'] },
    { todo: 4, titulo: 'Pipes', descricao: 'Usar pipes padrão (uppercase, date) e criar o pipe personalizado cep.', arquivos: ['pipes/cep-pipe.ts', 'pages/cadastro-aluno/cadastro-aluno.ts', 'pages/cadastro-aluno/cadastro-aluno.html'] },
    { todo: 5, titulo: 'API (viaCEP)', descricao: 'Chamar a API no service e assinar (subscribe) no componente.', arquivos: ['services/cep-service.ts', 'pages/cadastro-aluno/cadastro-aluno.ts'] },
  ];
}
