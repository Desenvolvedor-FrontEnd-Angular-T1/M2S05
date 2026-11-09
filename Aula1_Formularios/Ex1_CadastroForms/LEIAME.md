# Ex1 - Cadastros com formulários (live coding, ~60 min)

## Objetivo
Criar dois formulários na **biblioteca-web**: o cadastro de **leitor** com **Template-Driven Forms** e o cadastro de **livro** com **Reactive Forms**.

## Conceitos de hoje
| Conceito | Em uma frase |
|---|---|
| Template-Driven | A lógica mora no **template**: `FormsModule`, `[(ngModel)]` e validadores em atributos (`required`, `minlength`) |
| Reactive Forms | A lógica mora na **classe**: `FormGroup`, `FormControl` e `Validators` |
| Estados | `valid`, `touched`, `dirty` e as classes `ng-valid`, `ng-touched`... |
| Validador personalizado | Função que devolve `null` (válido) ou `{ nomeDoErro: true }` |

## Ponto de partida
1. Crie o projeto (uma vez só): `ng new biblioteca-web` e escolha **CSS** como formato de estilo (o restante pode aceitar como está). Confira com `ng version` que é **Angular 22**.
2. Entre na pasta (`cd biblioteca-web`) e **copie** o conteúdo de `exercicio/src/app` **por cima** de `src/app` do projeto (aceite substituir os arquivos).
3. Rode `ng serve` e abra `http://localhost:4200`.
4. O Ex1 é o primeiro da semana: **não precisa de nada anterior**.

Os arquivos já existem no `exercicio/`: você **completa o código** no lugar de cada comentário `TODO n`.
Para achar **todos os lugares de um passo**, use `Ctrl + Shift + F` e busque por `TODO 1`, `TODO 2`...

## Passo a passo (completo)
Cada passo abaixo diz **em qual arquivo** (a partir de `src/app/`) está o `TODO` e **o que fazer**, com o mesmo texto do comentário do código. Marque cada item quando terminar. Se travar, compare com o `gabarito/` (mesmos arquivos, código completo e comentado).

### Parte 1 - Template-Driven (cadastro de leitor)

#### TODO 1 - Template-Driven: a classe do leitor
- [ ] **Arquivo:** `src/app/cadastro-leitor/cadastro-leitor.ts`  
  **O que fazer:** Importe FormsModule e NgForm de '@angular/forms' e a interface Leitor de '../models/leitor'.
- [ ] **Arquivo:** `src/app/cadastro-leitor/cadastro-leitor.ts`  
  **O que fazer:** Adicione imports: [FormsModule] no @Component (sem isso o template não conhece o ngModel).
- [ ] **Arquivo:** `src/app/cadastro-leitor/cadastro-leitor.ts`  
  **O que fazer:** Crie o objeto leitor (nome, email, aceitaTermos), o signal mensagem e o método salvar(form: NgForm): se o form for inválido apenas retorne; senão mostre a mensagem de sucesso e limpe com form.resetForm({...}).

  > Dica: `Ctrl + Shift + F` e busque `TODO 1` para ver todos os pontos deste passo.

#### TODO 2 - Template-Driven: o formulário no template
- [ ] **Arquivo:** `src/app/cadastro-leitor/cadastro-leitor.html`  
  **O que fazer:** Monte o `<form #f="ngForm" (ngSubmit)="salvar(f)" novalidate>` com 3 campos: nome (required, minlength 3), email (required, email) e checkbox de termos (required). Cada input usa name, [(ngModel)] e uma variável de template (#nome="ngModel"). Mostre erros com @if (campo.invalid && (campo.touched || f.submitted)).

  > Dica: `Ctrl + Shift + F` e busque `TODO 2` para ver todos os pontos deste passo.

#### TODO 3 - Usar os dois formulários no App
- [ ] **Arquivo:** `src/app/app.html`  
  **O que fazer:** Coloque as tags `<app-cadastro-leitor />` e `<app-cadastro-livro />` aqui dentro.
- [ ] **Arquivo:** `src/app/app.ts`  
  **O que fazer:** Importe CadastroLeitor e CadastroLivro (os dois componentes de formulário) aqui e no array imports.
- [ ] **Arquivo:** `src/app/app.ts`  
  **O que fazer:** Adicione CadastroLeitor e CadastroLivro ao array imports.

  > Dica: `Ctrl + Shift + F` e busque `TODO 3` para ver todos os pontos deste passo.

### Parte 2 - Reactive Forms (cadastro de livro)

#### TODO 4 - LivroService: método adicionar()
- [ ] **Arquivo:** `src/app/services/livro-service.ts`  
  **O que fazer:** No LivroService, crie o método adicionar(dados: NovoLivro): Livro. Ele gera o id (maior id + 1), marca disponivel = true, usa uma capa padrão se imagem vier vazia e cria uma lista NOVA com update.

  > Dica: `Ctrl + Shift + F` e busque `TODO 4` para ver todos os pontos deste passo.

#### TODO 5 - Reactive: a classe do cadastro de livro
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Importe do '@angular/forms': ReactiveFormsModule, NonNullableFormBuilder, Validators, ValidatorFn, AbstractControl e ValidationErrors; importe JsonPipe de '@angular/common' e o LivroService.
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Crie o validador personalizado semSoEspacos (ValidatorFn): devolve { soEspacos: true } se o texto tiver só espaços; senão null.
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Adicione imports: [ReactiveFormsModule, JsonPipe].
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.ts`  
  **O que fazer:** Injete NonNullableFormBuilder e LivroService; crie categorias, o signal salvo, o form (FormGroup com 6 controles e seus Validators), o método erro(campo) e o método enviar().

  > Dica: `Ctrl + Shift + F` e busque `TODO 5` para ver todos os pontos deste passo.

#### TODO 6 - Reactive: o formulário no template
- [ ] **Arquivo:** `src/app/cadastro-livro/cadastro-livro.html`  
  **O que fazer:** Monte o `<form [formGroup]="form" (ngSubmit)="enviar()" novalidate>` com um campo para cada controle (formControlName), o `<select>` de categorias com @for, as mensagens de erro com erro('campo'), o status do form e a prévia `{{ form.value | json }}`.

  > Dica: `Ctrl + Shift + F` e busque `TODO 6` para ver todos os pontos deste passo.

## Como saber se deu certo
- Enviar o formulário do leitor vazio mostra **3 erros**; preenchido mostra a mensagem de sucesso e limpa o formulário.
- No livro, os erros aparecem **após tocar** no campo; enviar inválido mostra **todos** os erros.
- Um autor com **só espaços** é barrado pelo validador personalizado.
- O livro cadastrado aparece na lista, e o contador "livros no acervo" aumenta.

## Erros comuns
| Mensagem / sintoma | Causa provável |
|---|---|
| Can't bind to 'ngModel'... | Faltou `FormsModule` no `imports` do componente |
| Can't bind to 'formGroup'... | Faltou `ReactiveFormsModule` |
| ngModel dentro de `<form>` exige `name` | Campo sem o atributo `name` |
| Erro não aparece | O campo ainda não foi "tocado" (`touched`) |
| A lista não atualiza ao cadastrar | Usou `push` em vez de `update` com lista nova |

## Seu projeto está em outra versão?
Se o `ng version` mostrar Angular **anterior ao 22**: troque `@Service()` por `@Injectable({ providedIn: 'root' })` (importe `Injectable`) e acrescente `standalone: true` em cada `@Component`. O restante é igual.

## Gabarito
`gabarito/src/app` - código completo e comentado.
