// app.ts - componente raiz. Hoje ele hospeda a lista de livros e os DOIS formulários.
import { Component, inject } from '@angular/core';
import { CardLivro } from './card-livro/card-livro';
// TODO 3: Importe CadastroLeitor e CadastroLivro (os dois componentes de formulário) aqui e no array imports.
import { LivroService } from './services/livro-service';

@Component({
  selector: 'app-root',
  imports: [
    CardLivro,
    // TODO 3: Adicione CadastroLeitor e CadastroLivro ao array imports.
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Biblioteca Web';
  private livroService = inject(LivroService);
  livros = this.livroService.livros;

  emprestar(id: number): void {
    this.livroService.emprestar(id);
  }

  devolver(id: number): void {
    this.livroService.devolver(id);
  }
}
