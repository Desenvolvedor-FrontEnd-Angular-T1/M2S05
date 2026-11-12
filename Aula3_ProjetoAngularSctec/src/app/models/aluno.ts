// aluno.ts - MODELO (interface): descreve o "formato" de um aluno. Não vira código no navegador, só ajuda o TypeScript.
export interface Aluno {
  nome: string;
  email: string;
  telefone: string;
  curso: string;
  cep: string;
  cadastradoEm: Date;
}
