// detalhe-livro.ts - página de detalhe: recebe o :id da URL e mostra o livro.
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
// TODO 7: Importe CurrencyPipe, DatePipe e UpperCasePipe de '@angular/common'.
// TODO 8: Importe o TempoLeituraPipe de '../pipes/tempo-leitura'.
import { LivroService } from '../services/livro-service';

@Component({
  selector: 'app-detalhe-livro',
  imports: [
    RouterLink,
    // TODO 7: Adicione UpperCasePipe, CurrencyPipe e DatePipe ao array imports.
    // TODO 8: Adicione TempoLeituraPipe ao array imports.
  ],
  templateUrl: './detalhe-livro.html',
  styleUrl: './detalhe-livro.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetalheLivro {
  private livroService = inject(LivroService);

  // TODO 3: Declare id = input.required<string>() (o Angular entrega o :id da URL aqui) e livro = computed(...) que procura na lista o livro com Number(this.id()).

  // TODO 7: Crie hoje = new Date() para exibir com o pipe date.
}
