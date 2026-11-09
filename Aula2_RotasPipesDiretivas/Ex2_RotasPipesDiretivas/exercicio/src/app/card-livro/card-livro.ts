// card-livro.ts - componente de apresentação (agora com link de rota, pipes e diretiva).
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
// TODO 7: Importe CurrencyPipe de '@angular/common'.
// TODO 3: Importe RouterLink de '@angular/router'.
// TODO 9: Importe a diretiva Destaque de '../directives/destaque'.
import { Livro } from '../models/livro';
// TODO 8: Importe o TempoLeituraPipe de '../pipes/tempo-leitura'.

@Component({
  selector: 'app-card-livro',
  imports: [
    // TODO 3: Adicione RouterLink ao array imports.
    // TODO 7: Adicione CurrencyPipe ao array imports.
    // TODO 8: Adicione TempoLeituraPipe ao array imports.
    // TODO 9: Adicione Destaque ao array imports.
  ],
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLivro {
  livro = input.required<Livro>();
  emprestar = output<number>();
  devolver = output<number>();
}
