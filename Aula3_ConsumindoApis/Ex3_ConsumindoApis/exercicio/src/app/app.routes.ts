import { Routes } from '@angular/router';
import { BuscaCatalogo } from './busca-catalogo/busca-catalogo';
import { CadastroEndereco } from './cadastro-endereco/cadastro-endereco';
import { CadastroLeitor } from './cadastro-leitor/cadastro-leitor';
import { CadastroLivro } from './cadastro-livro/cadastro-livro';
import { DetalheLivro } from './detalhe-livro/detalhe-livro';
import { sairSemSalvarGuard } from './guards/sair-sem-salvar-guard';
import { ListaLivros } from './lista-livros/lista-livros';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';

export const routes: Routes = [
  { path: '', redirectTo: 'livros', pathMatch: 'full' },
  { path: 'livros', component: ListaLivros, title: 'Livros' },
  { path: 'livros/:id', component: DetalheLivro, title: 'Detalhe do livro' },
  { path: 'leitor', component: CadastroLeitor, title: 'Cadastro de leitor' },
  // TODO 3: Crie a rota 'endereco' abrindo CadastroEndereco.
  { path: 'cadastro', component: CadastroLivro, title: 'Cadastro de livro', canDeactivate: [sairSemSalvarGuard] },
  // TODO 5: Crie a rota 'catalogo' abrindo BuscaCatalogo.
  { path: 'sobre', loadComponent: () => import('./sobre/sobre').then((m) => m.Sobre), title: 'Sobre' },
  { path: '**', component: NaoEncontrado, title: 'Página não encontrada' },
];
