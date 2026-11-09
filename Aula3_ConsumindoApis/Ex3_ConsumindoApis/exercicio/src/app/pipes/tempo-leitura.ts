// tempo-leitura.ts - PIPE personalizado: transforma um número de páginas em "9h20min".
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempoLeitura',   // nome usado no template: {{ valor | tempoLeitura }}
})
export class TempoLeituraPipe implements PipeTransform {
  // 1º parâmetro = o valor à esquerda do | ; os demais vêm depois dos ":" -> {{ 280 | tempoLeitura: 40 }}
  transform(paginas: number, paginasPorHora = 30): string {
    const minutos = Math.round((paginas / paginasPorHora) * 60);
    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;
    return horas > 0 ? `${horas}h${resto.toString().padStart(2, '0')}min` : `${resto}min`;
  }
}
