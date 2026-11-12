// cep-service.ts - SERVICE: classe que centraliza o acesso a dados (aqui, a API pública viaCEP, sem chave).
// Criado com: ng generate service services/cep-service
// Componentes NÃO chamam a API direto: eles pedem para o service (separação de responsabilidades).
import { HttpClient } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Endereco } from '../models/endereco';

@Service() // Angular 22: o service fica disponível para o app inteiro (uma única instância).
export class CepService {
  private http = inject(HttpClient); // o HttpClient chega por injeção de dependência (ligado em app.config.ts)
  private readonly urlBase = 'https://viacep.com.br/ws';

  // TODO 5 (API) - parte A: APAGUE a linha "return throwError(...)" e escreva no lugar:
  //   return this.http.get<Endereco>(`${this.urlBase}/${cep}/json/`);
  // Isso faz um GET em https://viacep.com.br/ws/88010000/json/ e devolve um Observable<Endereco>.
  // Teste a URL no navegador antes: você verá o JSON que a API responde.
  buscar(cep: string): Observable<Endereco> {
    return throwError(() => new Error(`TODO 5: o CepService ainda não chama a API (cep ${cep}).`));
  }
}
