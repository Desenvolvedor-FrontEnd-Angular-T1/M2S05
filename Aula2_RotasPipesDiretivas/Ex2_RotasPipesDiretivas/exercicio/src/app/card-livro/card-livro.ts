import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Destaque } from '../directives/destaque';
import { Livro } from '../models/livro';
import { TempoLeituraPipe } from '../pipes/tempo-leitura';

@Component({
  selector: 'app-card-livro',
  imports: [
    RouterLink,
    CurrencyPipe,
    TempoLeituraPipe,
    Destaque,
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
