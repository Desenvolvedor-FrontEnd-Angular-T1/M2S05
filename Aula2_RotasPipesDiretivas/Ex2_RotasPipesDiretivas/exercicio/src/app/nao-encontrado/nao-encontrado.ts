// nao-encontrado.ts - página 404, usada pela rota coringa '**'.
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nao-encontrado',
  imports: [RouterLink],
  template: `
    <h2>Página não encontrada</h2>
    <p>O endereço digitado não existe. <a routerLink="/livros">Voltar para a lista</a></p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaoEncontrado {}
