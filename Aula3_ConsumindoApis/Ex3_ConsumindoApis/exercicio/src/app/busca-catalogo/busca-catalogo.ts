// busca-catalogo.ts - página que consulta a Open Library e trata os 3 estados: carregando, erro e sucesso.
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { CatalogoService, LivroCatalogo } from '../services/catalogo-service';
import { LivroService } from '../services/livro-service';

@Component({
  selector: 'app-busca-catalogo',
  imports: [ReactiveFormsModule],
  templateUrl: './busca-catalogo.html',
  styleUrl: './busca-catalogo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuscaCatalogo {
  // TODO 5: Crie: catalogo, livroService e router (inject); termo = new FormControl('', { nonNullable: true }); signals carregando, erro, buscou e resultados; e os métodos buscar() (valide 3+ letras, ligue carregando, chame catalogo.buscar(...).pipe(finalize(...)).subscribe({ next, error })) e importar(item) (livroService.adicionar + router.navigate).
}
