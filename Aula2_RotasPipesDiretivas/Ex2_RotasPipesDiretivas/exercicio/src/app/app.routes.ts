// app.routes.ts - o "mapa" da aplicação: cada URL (path) abre um componente.
import { Routes } from '@angular/router';
import { CadastroLeitor } from './cadastro-leitor/cadastro-leitor';
import { CadastroLivro } from './cadastro-livro/cadastro-livro';
import { DetalheLivro } from './detalhe-livro/detalhe-livro';
import { ListaLivros } from './lista-livros/lista-livros';
import { NaoEncontrado } from './nao-encontrado/nao-encontrado';
// TODO 5: Importe o sairSemSalvarGuard de './guards/sair-sem-salvar-guard'.

export const routes: Routes = [
  // TODO 1: Declare as rotas: '' (redirectTo 'livros', pathMatch 'full'), 'livros' (ListaLivros) e 'leitor' (CadastroLeitor). Use title para mudar o título da aba.
  // TODO 3: Declare a rota com parâmetro: 'livros/:id' abrindo DetalheLivro. O :id é o parâmetro.
  // TODO 5: Adicione canDeactivate: [sairSemSalvarGuard] na rota 'cadastro' (guard que pergunta antes de sair com dados não salvos).
  { path: 'cadastro', component: CadastroLivro, title: 'Cadastro de livro' },
  // TODO 6: Crie a rota 'sobre' com carregamento preguiçoso (lazy): loadComponent: () => import('./sobre/sobre').then((m) => m.Sobre).
  // TODO 1: Por último, a rota coringa '**' (NaoEncontrado). Ela pega qualquer URL desconhecida e DEVE ser a última.
];
