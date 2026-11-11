// app.routes.ts - o "mapa" da aplicação: cada URL (path) abre um componente.
import { Routes } from '@angular/router';
import { CadastroLeitor } from './cadastro-leitor/cadastro-leitor';
import { CadastroLivro } from './cadastro-livro/cadastro-livro';
import { DetalheLivro } from './detalhe-livro/detalhe-livro';
import { ListaLivros } from './lista-livros/lista-livros';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';
import { sairSemSalvarGuard } from './guards/sair-sem-salvar-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'livros', pathMatch: 'full' },
  { path: 'livros', component: ListaLivros, title: 'Livros' },
  { path: 'leitor', component: CadastroLeitor, title: 'Cadastro de leitor' },
  { path: 'livros/:id', component: DetalheLivro, title: 'Detalhe do livro' },
  { path: 'cadastro', component: CadastroLivro, title: 'Cadastro de livro', canDeactivate: [sairSemSalvarGuard] },
  { path: 'sobre', loadComponent: () => import('./sobre/sobre').then((m) => m.Sobre), title: 'Sobre' },
  { path: '**', component: NaoEncontrado, title: 'Página não encontrada' }, // coringa: SEMPRE por último
];
