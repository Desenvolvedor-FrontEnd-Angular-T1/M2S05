// sobre.ts - página carregada sob demanda (lazy loading): o código dela só é baixado ao abrir /sobre.
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  template: `
    <h2>Sobre a Biblioteca Web</h2>
    <p>Projeto-exemplo do curso de Angular. Esta página usa <strong>lazy loading</strong>: confira na aba Network do navegador.</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sobre {}
