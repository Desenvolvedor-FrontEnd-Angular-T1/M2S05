// somente-numeros.ts - DIRETIVA DE ATRIBUTO: impede letras em um <input> (vai ser usada no campo de CEP).
import { Directive } from '@angular/core';

@Directive({
  selector: 'input[appSomenteNumeros]',
  host: { '(input)': 'filtrar($event)' },
})
export class SomenteNumeros {
  filtrar(evento: Event): void {
    const campo = evento.target as HTMLInputElement;
    const limpo = campo.value.replace(/\D/g, '');   // remove tudo que não for dígito
    if (limpo !== campo.value) {
      campo.value = limpo;
      campo.dispatchEvent(new Event('input'));       // avisa o formulário do novo valor
    }
  }
}
