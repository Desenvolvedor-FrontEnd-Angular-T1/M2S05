// app.routes.ts - MAPA DE ROTAS: "quando a URL for X, mostre o componente Y" dentro do <router-outlet>.
import { Routes } from '@angular/router';
import { CadastroAluno } from './pages/cadastro-aluno/cadastro-aluno';
import { Contato } from './pages/contato/contato';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  // Rota vazia (http://localhost:4200/) abre a página Início. JÁ ESTÁ PRONTA: use como modelo.
  { path: '', component: Inicio, title: 'Início | Projeto SCTEC' },

  // TODO 1 (ROTAS): Crie as 2 rotas abaixo, seguindo o modelo da rota de cima (os imports já estão no topo do arquivo):
  //   1) path 'contato'  -> component Contato        -> title 'Contato | Projeto SCTEC'
  //   2) path 'cadastro' -> component CadastroAluno  -> title 'Cadastro | Projeto SCTEC'
  // Escreva aqui, ACIMA da rota '**' (a ordem importa: o Angular lê de cima para baixo).


  // Qualquer endereço desconhecido volta para o Início. Deve ser SEMPRE a última rota.
  { path: '**', redirectTo: '' },
];
