// destaque.ts - DIRETIVA DE ATRIBUTO: pinta o fundo do elemento quando o mouse passa por cima.
import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appDestaque]',
  host: {
    '(mouseenter)': 'ativar()',
    '(mouseleave)': 'desativar()',
  },
})
export class Destaque {
  private elemento = inject(ElementRef<HTMLElement>);

  // Cor opcional: <article appDestaque> usa o amarelo; <article appDestaque="#bbdefb"> usa a cor informada.
  cor = input('#fff59d', { alias: 'appDestaque' });

  ativar(): void {
    this.elemento.nativeElement.style.backgroundColor = this.cor() || '#fff59d';
  }

  desativar(): void {
    this.elemento.nativeElement.style.backgroundColor = '';
  }
}
