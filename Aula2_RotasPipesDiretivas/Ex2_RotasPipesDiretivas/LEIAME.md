# Ex2 - Rotas, pipes e diretivas (live coding, ~80 min)

## Objetivo
Transformar a **biblioteca-web** em uma aplicação de várias páginas (**roteamento**), formatar dados com **pipes** (nativos e personalizado) e criar **diretivas de atributo**.

## Conceitos de hoje
| Conceito | Em uma frase |
|---|---|
| `provideRouter` + `Routes` | O "mapa" da aplicação: cada URL abre um componente |
| `router-outlet` / `routerLink` | O espaço da página e os links que trocam de página sem recarregar |
| Parâmetro `:id` | Parte variável da URL, entregue ao componente como `input()` |
| Guard | Função que libera ou bloqueia a navegação (`canDeactivate`) |
| Lazy loading | `loadComponent`: o código da página só é baixado quando ela é aberta |
| Pipe | Formata o valor só na tela (`date`, `currency`, `uppercase`, personalizado) |
| Diretiva de atributo | Muda aparência/comportamento de um elemento (`appDestaque`, `appSomenteNumeros`) |

## Ponto de partida
1. Crie o projeto (uma vez só): `ng new biblioteca-web` e escolha **CSS** como formato de estilo (o restante pode aceitar como está). Confira com `ng version` que é **Angular 22**.
2. Entre na pasta (`cd biblioteca-web`) e **copie** o conteúdo de `exercicio/src/app` **por cima** de `src/app` do projeto (aceite substituir os arquivos).
3. Rode `ng serve` e abra `http://localhost:4200`.
4. O `exercicio/` já traz o resultado do Ex1 (formulários prontos). Quem faltou na segunda pode começar aqui normalmente.

Os arquivos já existem no `exercicio/`: você **completa o código** no lugar de cada comentário `TODO n`.
Para achar **todos os lugares de um passo**, use `Ctrl + Shift + F` e busque por `TODO 1`, `TODO 2`...

## Passo a passo (completo)
Cada passo abaixo diz **em qual arquivo** (a partir de `src/app/`) está o `TODO` e **o que fazer**, com o mesmo texto do comentário do código. Marque cada item quando terminar. Se travar, compare com o `gabarito/` (mesmos arquivos, código completo e comentado).

### Parte 1 - Roteamento

#### TODO 1 - Rotas e provideRouter
- [ ] **Arquivo:** `src/app/app.config.ts`  
  **O que fazer:** Registre as rotas no providers: provideRouter(routes, withComponentInputBinding()). O withComponentInputBinding entrega parâmetros da URL como input() do componente.
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Declare as rotas: '' (redirectTo 'livros', pathMatch 'full'), 'livros' (ListaLivros) e 'leitor' (CadastroLeitor). Use title para mudar o título da aba.
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Por último, a rota coringa `'**'` (NaoEncontrado). Ela pega qualquer URL desconhecida e DEVE ser a última.

  > Dica: `Ctrl + Shift + F` e busque `TODO 1` para ver todos os pontos deste passo.

#### TODO 2 - Shell do App: menu e router-outlet
- [ ] **Arquivo:** `src/app/app.html`  
  **O que fazer:** Crie o `<nav>` com links routerLink + routerLinkActive="ativo" para /livros, /cadastro, /leitor e /sobre.
- [ ] **Arquivo:** `src/app/app.html`  
  **O que fazer:** Adicione `<router-outlet />` : é o "espaço" onde a página da rota atual aparece.
- [ ] **Arquivo:** `src/app/app.ts`  
  **O que fazer:** Importe RouterOutlet, RouterLink e RouterLinkActive de '@angular/router' e coloque-os no array imports.
- [ ] **Arquivo:** `src/app/app.ts`  
  **O que fazer:** Preencha imports: [RouterOutlet, RouterLink, RouterLinkActive].

  > Dica: `Ctrl + Shift + F` e busque `TODO 2` para ver todos os pontos deste passo.

#### TODO 3 - Rota com parâmetro e página de detalhe
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Declare a rota com parâmetro: 'livros/:id' abrindo DetalheLivro. O :id é o parâmetro.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.html`  
  **O que fazer:** Transforme o título em link para o detalhe: `<a [routerLink]="['/livros', livro().id]">`.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Importe RouterLink de '@angular/router'.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Adicione RouterLink ao array imports.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.html`  
  **O que fazer:** Monte a página: @if (livro(); as l) { link "Voltar" com routerLink="/livros", imagem, título, autor, categoria, páginas e disponibilidade } @else { mensagem "Livro não encontrado" }.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.ts`  
  **O que fazer:** Declare id = `input.required<string>`() (o Angular entrega o :id da URL aqui) e livro = computed(...) que procura na lista o livro com Number(this.id()).

  > Dica: `Ctrl + Shift + F` e busque `TODO 3` para ver todos os pontos deste passo.

#### TODO 4 - Navegar por código depois de salvar
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Importe o Router de '@angular/router'.
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Injete o Router: private router = inject(Router).
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Depois de salvar, vá para o detalhe do livro novo: this.router.navigate(['/livros', novo.id]).

  > Dica: `Ctrl + Shift + F` e busque `TODO 4` para ver todos os pontos deste passo.

#### TODO 5 - Guard canDeactivate
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Importe o sairSemSalvarGuard de './guards/sair-sem-salvar-guard'.
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Adicione canDeactivate: [sairSemSalvarGuard] na rota 'cadastro' (guard que pergunta antes de sair com dados não salvos).
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Crie o método público temAlteracoes(): boolean que devolve this.form.dirty (o guard chama este método).
- [ ] **Arquivo:** `src/app/guards/sair-sem-salvar-guard.ts`  
  **O que fazer:** Crie o guard: export const sairSemSalvarGuard: `CanDeactivateFn<CadastroLivro>` = (componente) => ... Se o formulário não foi alterado (componente.temAlteracoes() é false) libere; senão peça confirmação com confirm(...).

  > Dica: `Ctrl + Shift + F` e busque `TODO 5` para ver todos os pontos deste passo.

#### TODO 6 - Lazy loading da página Sobre
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Crie a rota 'sobre' com carregamento preguiçoso (lazy): loadComponent: () => import('./sobre/sobre').then((m) => m.Sobre).

  > Dica: `Ctrl + Shift + F` e busque `TODO 6` para ver todos os pontos deste passo.

### Parte 2 - Pipes e diretivas

#### TODO 7 - Idioma pt-BR e pipes nativos
- [ ] **Arquivo:** `src/app/app.config.ts`  
  **O que fazer:** Registre os dados de localização do português (registerLocaleData(localePt)); sem isso os pipes date e currency falam inglês.
- [ ] **Arquivo:** `src/app/app.config.ts`  
  **O que fazer:** Defina o idioma padrão dos pipes: { provide: LOCALE_ID, useValue: 'pt-BR' }.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.html`  
  **O que fazer:** Mostre o preço formatado: `{{ livro().preco | currency: 'BRL' }}`.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Importe CurrencyPipe de '@angular/common'.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Adicione CurrencyPipe ao array imports.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.html`  
  **O que fazer:** Mostre a "ficha" com pipes nativos: `{{ l.titulo | uppercase }}`, `{{ l.preco | currency: 'BRL' }}` e `{{ hoje | date: 'fullDate' }}`.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.ts`  
  **O que fazer:** Importe CurrencyPipe, DatePipe e UpperCasePipe de '@angular/common'.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.ts`  
  **O que fazer:** Adicione UpperCasePipe, CurrencyPipe e DatePipe ao array imports.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.ts`  
  **O que fazer:** Crie hoje = new Date() para exibir com o pipe date.

  > Dica: `Ctrl + Shift + F` e busque `TODO 7` para ver todos os pontos deste passo.

#### TODO 8 - Pipe personalizado tempoLeitura
- [ ] **Arquivo:** `src/app/card-livro/card-livro.html`  
  **O que fazer:** Mostre `{{ livro().paginas | tempoLeitura }}` ao lado do número de páginas.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Importe o TempoLeituraPipe de '../pipes/tempo-leitura'.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Adicione TempoLeituraPipe ao array imports.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.html`  
  **O que fazer:** Mostre o tempo de leitura com o seu pipe: `{{ l.paginas | tempoLeitura }}`.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.ts`  
  **O que fazer:** Importe o TempoLeituraPipe de '../pipes/tempo-leitura'.
- [ ] **Arquivo:** `src/app/detalhe-livro/detalhe-livro.ts`  
  **O que fazer:** Adicione TempoLeituraPipe ao array imports.
- [ ] **Arquivo:** `src/app/pipes/tempo-leitura.ts`  
  **O que fazer:** Crie o pipe: @Pipe({ name: 'tempoLeitura' }) class TempoLeituraPipe implements PipeTransform, com transform(paginas: number, paginasPorHora = 30): string. Calcule os minutos e devolva "XhYYmin" (ou só "Ymin").

  > Dica: `Ctrl + Shift + F` e busque `TODO 8` para ver todos os pontos deste passo.

#### TODO 9 - Diretiva appDestaque
- [ ] **Arquivo:** `src/app/card-livro/card-livro.html`  
  **O que fazer:** Aplique a diretiva no cartão: acrescente o atributo appDestaque na tag `<article>`.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Importe a diretiva Destaque de '../directives/destaque'.
- [ ] **Arquivo:** `src/app/card-livro/card-livro.ts`  
  **O que fazer:** Adicione Destaque ao array imports.
- [ ] **Arquivo:** `src/app/directives/destaque.ts`  
  **O que fazer:** Crie a diretiva [appDestaque]: host com '(mouseenter)' e '(mouseleave)', ElementRef via inject, input opcional com a cor (alias 'appDestaque') e os métodos ativar() e desativar() que mudam style.backgroundColor.

  > Dica: `Ctrl + Shift + F` e busque `TODO 9` para ver todos os pontos deste passo.

#### TODO 10 - Diretiva appSomenteNumeros
- [ ] **Arquivo:** `src/app/directives/somente-numeros.ts`  
  **O que fazer:** Crie a diretiva input[appSomenteNumeros] com host '(input)': 'filtrar($event)'. O método filtrar(evento: Event) remove tudo que não for dígito (replace(/\D/g, '')) e, se mudou o texto, atualiza campo.value e dispara new Event('input').

  > Dica: `Ctrl + Shift + F` e busque `TODO 10` para ver todos os pontos deste passo.

## Como saber se deu certo
- O menu troca de página **sem recarregar**; o link da página atual fica destacado.
- Clicar no título de um livro abre `/livros/3`; um id inexistente mostra "Livro não encontrado".
- URL desconhecida mostra a página 404.
- No cadastro, digitar algo e clicar em outro link **pergunta antes de sair**; salvar leva ao detalhe do livro novo.
- Abrir `/sobre` baixa um `chunk-...js` (DevTools > Network).
- Preço como **R$ 59,90**, data por extenso em português, `280 págs · 9h20min` no card, fundo amarelo ao passar o mouse.

## Erros comuns
| Mensagem / sintoma | Causa provável |
|---|---|
| Cannot match any routes. URL Segment: 'x' | Rota não declarada, ou `**` fora da última posição |
| `routerLink` não faz nada / não é conhecido | Faltou `RouterLink` no `imports` |
| Nada aparece ao trocar de rota | Faltou `<router-outlet />` |
| Pipe não encontrado | Pipe fora do `imports` do componente |
| Moeda e datas em inglês | Faltou `registerLocaleData` + `LOCALE_ID` |
| `:id` não encontra o livro | O parâmetro é texto: use `Number(this.id())` |

## Seu projeto está em outra versão?
Antes do Angular 22: `@Service()` -> `@Injectable({ providedIn: 'root' })`, `standalone: true` nos `@Component`, `@Directive` e `@Pipe`, e `provideZoneChangeDetection({ eventCoalescing: true })` no lugar de `provideBrowserGlobalErrorListeners()`.

## Gabarito
`gabarito/src/app` - código completo e comentado.
