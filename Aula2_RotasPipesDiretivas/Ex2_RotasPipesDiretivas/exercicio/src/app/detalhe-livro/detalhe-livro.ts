// detalhe-livro.ts - página de detalhe: recebe o :id da URL e mostra o livro.
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { TempoLeituraPipe } from '../pipes/tempo-leitura';
import { LivroService } from '../services/livro-service';

@Component({
  selector: 'app-detalhe-livro',
  imports: [
    RouterLink,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    TempoLeituraPipe,
  ],
  templateUrl: './detalhe-livro.html',
  styleUrl: './detalhe-livro.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalheLivro {
  private livroService = inject(LivroService);

  // O Angular entrega o :id da URL aqui (graças ao withComponentInputBinding). Vem como TEXTO.
  id = input.required<string>();

  // Recalcula sozinho quando o id muda; undefined se não existir (a tela mostra "não encontrado").
  livro = computed(() => this.livroService.livros().find((l) => l.id === Number(this.id())));

  // Data de hoje, exibida com o pipe date.
  hoje = new Date();
}
