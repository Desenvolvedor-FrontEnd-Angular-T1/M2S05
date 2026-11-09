// somente-numeros.ts - DIRETIVA DE ATRIBUTO: impede letras em um <input> (vai ser usada no campo de CEP).
import { Directive } from '@angular/core';

// TODO 10: Crie a diretiva input[appSomenteNumeros] com host '(input)': 'filtrar($event)'. O método filtrar(evento: Event) remove tudo que não for dígito (replace(/\D/g, '')) e, se mudou o texto, atualiza campo.value e dispara new Event('input').
