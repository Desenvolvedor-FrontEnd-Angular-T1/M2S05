// card-livro.ts - componente de apresentação (semana 4: input() e output() com signals).
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Livro } from '../models/livro';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.html',
  styleUrl: './card-livro.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardLivro {
  livro = input.required<Livro>();   // entrada obrigatória (signal): no template é livro()
  emprestar = output<number>();      // evento que leva o id do livro
  devolver = output<number>();
}
