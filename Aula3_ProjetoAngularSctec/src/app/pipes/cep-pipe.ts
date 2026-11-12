// cep-pipe.ts - PIPE PERSONALIZADO: transforma "88010000" em "88010-000" na hora de exibir.
// Criado com: ng generate pipe pipes/cep
// Uso no HTML: {{ aluno.cep | cep }}   (o valor à esquerda do | chega no parâmetro "valor")
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep', // nome usado no template depois do |
})
export class CepPipe implements PipeTransform {
  // TODO 4 (PIPES) - parte A: troque o "return valor;" por:
  //   return `${valor.slice(0, 5)}-${valor.slice(5)}`;
  // slice(0, 5) pega os 5 primeiros números | slice(5) pega o resto.
  transform(valor: string): string {
    return valor;
  }
}
