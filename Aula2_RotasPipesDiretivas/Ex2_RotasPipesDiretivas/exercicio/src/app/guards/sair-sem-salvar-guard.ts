// sair-sem-salvar-guard.ts - GUARD funcional: roda ANTES de sair da página e pode bloquear a navegação.
import { CanDeactivateFn } from '@angular/router';
import { CadastroLivro } from '../cadastro-livro/cadastro-livro';

export const sairSemSalvarGuard: CanDeactivateFn<CadastroLivro> = (componente) => {
  // Sem alterações: libera. Com alterações: pergunta (true = sair, false = ficar).
  if (!componente.temAlteracoes()) return true;
  return confirm('Você tem dados não salvos. Deseja sair mesmo assim?');
};
