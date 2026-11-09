// lista-livros.ts - PÁGINA da lista (antes ficava dentro do App). Pronta para uso.
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CardLivro } from '../card-livro/card-livro';
import { LivroService } from '../services/livro-service';

@Component({
  selector: 'app-lista-livros',
  imports: [CardLivro],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaLivros {
  private livroService = inject(LivroService);
  livros = this.livroService.livros;

  emprestar(id: number): void {
    this.livroService.emprestar(id);
  }

  devolver(id: number): void {
    this.livroService.devolver(id);
  }
}
