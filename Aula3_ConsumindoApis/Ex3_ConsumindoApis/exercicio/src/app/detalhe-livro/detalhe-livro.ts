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

  id = input.required<string>();   // a URL /livros/3 entrega '3' (sempre texto!)
  livro = computed(() => this.livroService.livros().find((l) => l.id === Number(this.id())));

  protected hoje = new Date();
}
