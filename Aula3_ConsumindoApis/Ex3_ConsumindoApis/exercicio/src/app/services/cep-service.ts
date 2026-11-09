// cep-service.ts - conversa com a API pública viaCEP (sem chave): https://viacep.com.br
import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

// Formato que o NOSSO app usa (nomes em português e só o que precisamos).
export interface Endereco {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
}

// Formato que a API devolve (localidade = cidade). "erro" aparece quando o CEP não existe.
interface RespostaViaCep {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean | string;
}

@Service()
export class CepService {
  private http = inject(HttpClient);   // o HttpClient também vem por injeção de dependência

  // TODO 2: Crie buscar(cep: string): Observable<Endereco>. Faça http.get<RespostaViaCep>(`https://viacep.com.br/ws/${cep}/json/`) e use pipe(map(...)): se resposta.erro, lance new Error('CEP não encontrado'); senão devolva o objeto no formato Endereco (cidade = localidade).
}
