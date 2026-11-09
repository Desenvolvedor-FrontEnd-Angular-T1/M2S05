// sair-sem-salvar-guard.ts - GUARD funcional: roda ANTES de sair da página e pode bloquear a navegação.
import { CanDeactivateFn } from '@angular/router';
import { CadastroLivro } from '../cadastro-livro/cadastro-livro';

// true = deixa sair | false = fica na página. O parâmetro "componente" é a instância da página que o usuário está deixando.
export const sairSemSalvarGuard: CanDeactivateFn<CadastroLivro> = (componente) =>
  !componente.temAlteracoes() || confirm('Há dados não salvos. Deseja sair mesmo assim?');
