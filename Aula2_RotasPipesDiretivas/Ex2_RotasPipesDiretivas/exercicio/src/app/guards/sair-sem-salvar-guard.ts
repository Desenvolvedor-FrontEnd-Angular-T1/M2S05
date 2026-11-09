// sair-sem-salvar-guard.ts - GUARD funcional: roda ANTES de sair da página e pode bloquear a navegação.
import { CanDeactivateFn } from '@angular/router';
import { CadastroLivro } from '../cadastro-livro/cadastro-livro';

// TODO 5: Crie o guard: export const sairSemSalvarGuard: CanDeactivateFn<CadastroLivro> = (componente) => ... Se o formulário não foi alterado (componente.temAlteracoes() é false) libere; senão peça confirmação com confirm(...).
