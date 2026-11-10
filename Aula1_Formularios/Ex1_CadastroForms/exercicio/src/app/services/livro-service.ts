// livro-service.ts - service da semana 4 (versão enxuta): guarda a lista de livros num signal.
import { Service, signal } from '@angular/core';
import { Livro } from '../models/livro';

// NovoLivro = tudo que o formulário informa. Omit<> "remove" do tipo Livro os campos que o service preenche sozinho.
export type NovoLivro = Omit<Livro, 'id' | 'disponivel'>;

@Service()
export class LivroService {
  // Lista privada em um signal: só o service altera; quem está fora só lê (asReadonly).
  private _livros = signal<Livro[]>([
    { id: 1, titulo: 'JavaScript para Iniciantes', autor: 'Ana Souza', categoria: 'Programação', paginas: 280, preco: 59.9, disponivel: true, imagem: 'https://picsum.photos/seed/livro1/300/180' },
    { id: 2, titulo: 'CSS Moderno', autor: 'Carlos Lima', categoria: 'Design', paginas: 190, preco: 49.5, disponivel: true, imagem: 'https://picsum.photos/seed/livro2/300/180' },
    { id: 3, titulo: 'HTML Semântico', autor: 'Fernanda Rocha', categoria: 'Programação', paginas: 150, preco: 39.0, disponivel: false, imagem: 'https://picsum.photos/seed/livro3/300/180' },
    { id: 4, titulo: 'Lógica de Programação', autor: 'Marcos Silva', categoria: 'Programação', paginas: 320, preco: 74.9, disponivel: true, imagem: 'https://picsum.photos/seed/livro4/300/180' },
    { id: 5, titulo: 'Banco de Dados na Prática', autor: 'Juliana Costa', categoria: 'Banco de Dados', paginas: 410, preco: 89.9, disponivel: true, imagem: 'https://picsum.photos/seed/livro5/300/180' },
    { id: 6, titulo: 'UX para Devs', autor: 'Lucas Pereira', categoria: 'Design', paginas: 230, preco: 64.0, disponivel: false, imagem: 'https://picsum.photos/seed/livro6/300/180' },
    { id: 7, titulo: 'Node.js na Prática', autor: 'Eduardo Martins', categoria: 'Programação', paginas: 360, preco: 79.9, disponivel: true, imagem: 'https://picsum.photos/seed/livro7/300/180' },
    { id: 8, titulo: 'Angular Completo', autor: 'Roberta Santos', categoria: 'Programação', paginas: 480, preco: 99.9, disponivel: true, imagem: 'https://picsum.photos/seed/livro8/300/180' },
  ]);
  readonly livros = this._livros.asReadonly();

  emprestar(id: number): void {
    this.alterarDisponibilidade(id, false);
  }

  devolver(id: number): void {
    this.alterarDisponibilidade(id, true);
  }

  adicionar(dados: NovoLivro): Livro {
    const id = Math.max(0, ...this._livros().map((l) => l.id)) + 1;
    const livro: Livro = {
      ...dados,
      id,
      disponivel: true,
      imagem: dados.imagem || `https://picsum.photos/seed/livro${id}/300/180`, 
    };
    this._livros.update((lista) => [...lista, livro]);
    return livro;
  }


  // Método auxiliar: troca só o campo "disponivel" do livro com o id informado.
  private alterarDisponibilidade(id: number, disponivel: boolean): void {
    this._livros.update((lista) => lista.map((l) => (l.id === id ? { ...l, disponivel } : l)));
  }
}
