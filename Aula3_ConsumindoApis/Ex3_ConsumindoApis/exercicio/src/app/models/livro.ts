// livro.ts - o "contrato" (interface) de um livro. Só existe em tempo de compilação.
export interface Livro {
  id: number;            // identificador único
  titulo: string;        // nome do livro
  autor: string;         // quem escreveu
  categoria: string;     // Programação, Design...
  paginas: number;       // quantidade de páginas
  preco: number;         // preço de referência em reais (usado nos pipes de terça)
  disponivel: boolean;   // true = na estante | false = emprestado
  imagem: string;        // URL da capa
}
