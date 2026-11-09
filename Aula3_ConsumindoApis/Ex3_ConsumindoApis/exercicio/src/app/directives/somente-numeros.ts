// somente-numeros.ts - DIRETIVA DE ATRIBUTO: impede letras em um <input> (vai ser usada no campo de CEP).
import { Directive } from '@angular/core';

@Directive({
  selector: 'input[appSomenteNumeros]',
  host: { '(input)': 'filtrar($event)' },   // a cada tecla digitada
})
export class SomenteNumeros {
  filtrar(evento: Event): void {
    const campo = evento.target as HTMLInputElement;
    const limpo = campo.value.replace(/\D/g, '');   // \D = qualquer caractere que NÃO é dígito
    if (limpo !== campo.value) {
      campo.value = limpo;                          // devolve ao campo só os números
      campo.dispatchEvent(new Event('input'));      // avisa o formulário do valor corrigido
    }
  }
}
