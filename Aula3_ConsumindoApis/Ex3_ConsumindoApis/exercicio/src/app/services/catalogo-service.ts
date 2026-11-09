// catalogo-service.ts - consulta o catálogo público da Open Library (sem chave): https://openlibrary.org/dev/docs/api/search
import { HttpClient, HttpParams } from '@angular/common/http';
import { Service, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface LivroCatalogo {
  chave: string;
  titulo: string;
  autor: string;
  ano: number | null;
  paginas: number | null;
  capa: string;
}

interface RespostaOpenLibrary {
  docs: {
    key: string;
    title: string;
    author_name?: string[];
    first_publish_year?: number;
    number_of_pages_median?: number;
    cover_i?: number;
  }[];
}

@Service()
export class CatalogoService {
  private http = inject(HttpClient);

  // TODO 4: Crie buscar(termo: string): Observable<LivroCatalogo[]>. Monte os parâmetros com new HttpParams().set('q', termo).set('limit', 8).set('fields', '...') e faça http.get<RespostaOpenLibrary>('https://openlibrary.org/search.json', { params }) com pipe(map(...)) convertendo cada doc em LivroCatalogo.
}
