// destaque.ts - DIRETIVA DE ATRIBUTO: pinta o fundo do elemento quando o mouse passa por cima.
import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appDestaque]',   // usada como ATRIBUTO: <article appDestaque>
  host: {
    '(mouseenter)': 'ativar()',    // escuta eventos do PRÓPRIO elemento onde a diretiva foi colocada
    '(mouseleave)': 'desativar()',
  },
})
export class Destaque {
  private el = inject<ElementRef<HTMLElement>>(ElementRef);   // acesso ao elemento HTML real
  cor = input('', { alias: 'appDestaque' });                    // <article [appDestaque]="'#c8e6c9'"> (opcional)

  ativar(): void {
    this.el.nativeElement.style.backgroundColor = this.cor() || '#fff3b0';   // sem cor informada: amarelo claro
  }

  desativar(): void {
    this.el.nativeElement.style.backgroundColor = '';                        // remove o estilo inline
  }
}
