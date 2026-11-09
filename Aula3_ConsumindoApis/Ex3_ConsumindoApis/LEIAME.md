# Ex3 - Consumindo APIs: CEP, catálogo e interceptor (live coding, ~75 min)

## Objetivo
Consumir APIs reais com o `HttpClient`: preencher um endereço pelo **CEP** (viaCEP), buscar livros no catálogo **Open Library**, tratar os **3 estados** da tela (carregando, sucesso, erro) e registrar um **interceptor**.

## Conceitos de hoje
| Conceito | Em uma frase |
|---|---|
| `provideHttpClient()` | Habilita o `HttpClient` na aplicação |
| `http.get<T>()` | Devolve um Observable; a requisição só sai com `subscribe` |
| `HttpParams` | Monta a query string (`?q=angular&limit=8`) |
| 3 estados | `carregando`, `erro` e sucesso, controlados com signals e `finalize` |
| `valueChanges` | Observable das mudanças de um campo; use `takeUntilDestroyed` |
| Interceptor | Função que passa por toda requisição (log, cabeçalhos, token) |
| CORS | Regra do navegador: a API precisa permitir a origem |

## APIs usadas (gratuitas, sem chave)
- viaCEP: `https://viacep.com.br/ws/{cep}/json/` (CEP inexistente responde `200` com `{ "erro": true }`).
- Open Library: `https://openlibrary.org/search.json?q=...`.
- RapidAPI: apenas o **modelo** de interceptor (bônus); **não coloque chaves reais** no código nem no GitHub.

## Ponto de partida
1. Crie o projeto (uma vez só): `ng new biblioteca-web` e escolha **CSS** como formato de estilo (o restante pode aceitar como está). Confira com `ng version` que é **Angular 22**.
2. Entre na pasta (`cd biblioteca-web`) e **copie** o conteúdo de `exercicio/src/app` **por cima** de `src/app` do projeto (aceite substituir os arquivos).
3. Rode `ng serve` e abra `http://localhost:4200`.
4. O `exercicio/` já traz o resultado do Ex1 e do Ex2 (inclusive a diretiva `appSomenteNumeros`). **É preciso ter internet.**

Os arquivos já existem no `exercicio/`: você **completa o código** no lugar de cada comentário `TODO n`.
Para achar **todos os lugares de um passo**, use `Ctrl + Shift + F` e busque por `TODO 1`, `TODO 2`...

## Passo a passo (completo)
Cada passo abaixo diz **em qual arquivo** (a partir de `src/app/`) está o `TODO` e **o que fazer**, com o mesmo texto do comentário do código. Marque cada item quando terminar. Se travar, compare com o `gabarito/` (mesmos arquivos, código completo e comentado).

### Parte 1 - Endereço com CEP

#### TODO 1 - Habilitar o HttpClient
- [ ] **Arquivo:** `src/app/app.config.ts`  
  **O que fazer:** Habilite o HttpClient para a aplicação toda: provideHttpClient(). No passo 6 você vai trocar por provideHttpClient(withInterceptors([logInterceptor])).

  > Dica: `Ctrl + Shift + F` e busque `TODO 1` para ver todos os pontos deste passo.

#### TODO 2 - CepService (viaCEP)
- [ ] **Arquivo:** `src/app/services/cep-service.ts`  
  **O que fazer:** Crie buscar(cep: string): `Observable<Endereco>`. Faça `http.get<RespostaViaCep>`(`https://viacep.com.br/ws/${cep}/json/`) e use pipe(map(...)): se resposta.erro, lance new Error('CEP não encontrado'); senão devolva o objeto no formato Endereco (cidade = localidade).

  > Dica: `Ctrl + Shift + F` e busque `TODO 2` para ver todos os pontos deste passo.

#### TODO 3 - Formulário de endereço com busca de CEP
- [ ] **Arquivo:** `src/app/app.html`  
  **O que fazer:** Acrescente o link routerLink="/endereco" (texto "Endereço (CEP)") no menu.
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Crie a rota 'endereco' abrindo CadastroEndereco.
- [ ] **Arquivo:** `src/app/cadastro-endereco/cadastro-endereco.html`  
  **O que fazer:** Monte o formulário [formGroup]="form": campo CEP com appSomenteNumeros e maxlength="8" (mostre "Buscando CEP..." com carregando() e a mensagem erroCep()), mais logradouro, número, bairro, cidade e UF. Use invalido('campo') para os avisos e o botão "Salvar endereço".
- [ ] **Arquivo:** `src/app/cadastro-endereco/cadastro-endereco.ts`  
  **O que fazer:** Importe a diretiva SomenteNumeros ('../directives/somente-numeros') e o CepService ('../services/cep-service').
- [ ] **Arquivo:** `src/app/cadastro-endereco/cadastro-endereco.ts`  
  **O que fazer:** Declare imports: [ReactiveFormsModule, SomenteNumeros].
- [ ] **Arquivo:** `src/app/cadastro-endereco/cadastro-endereco.ts`  
  **O que fazer:** Crie: fb e cepService (inject); signals carregando, erroCep e salvo; o form (cep com required + pattern /^\d{8}$/, logradouro, numero, bairro, cidade e uf, todos required); no constructor, escute form.controls.cep.valueChanges (filter length 8, takeUntilDestroyed) e chame buscarCep(); e os métodos buscarCep(), invalido(campo) e enviar().

  > Dica: `Ctrl + Shift + F` e busque `TODO 3` para ver todos os pontos deste passo.

### Parte 2 - Catálogo e interceptor

#### TODO 4 - CatalogoService (Open Library)
- [ ] **Arquivo:** `src/app/services/catalogo-service.ts`  
  **O que fazer:** Crie buscar(termo: string): `Observable<LivroCatalogo[]>`. Monte os parâmetros com new HttpParams().set('q', termo).set('limit', 8).set('fields', '...') e faça `http.get<RespostaOpenLibrary>`('https://openlibrary.org/search.json', { params }) com pipe(map(...)) convertendo cada doc em LivroCatalogo.

  > Dica: `Ctrl + Shift + F` e busque `TODO 4` para ver todos os pontos deste passo.

#### TODO 5 - Página de busca no catálogo
- [ ] **Arquivo:** `src/app/app.html`  
  **O que fazer:** Acrescente o link routerLink="/catalogo" (texto "Catálogo online") no menu.
- [ ] **Arquivo:** `src/app/app.routes.ts`  
  **O que fazer:** Crie a rota 'catalogo' abrindo BuscaCatalogo.
- [ ] **Arquivo:** `src/app/busca-catalogo/busca-catalogo.html`  
  **O que fazer:** Monte a busca: input com [formControl]="termo" e (keyup.enter)="buscar()", botão Buscar, as mensagens dos 3 estados (carregando(), erro(), "nenhum resultado") e a lista @for dos resultados() com capa, título, autor, ano e botão Importar.
- [ ] **Arquivo:** `src/app/busca-catalogo/busca-catalogo.ts`  
  **O que fazer:** Crie: catalogo, livroService e router (inject); termo = new FormControl('', { nonNullable: true }); signals carregando, erro, buscou e resultados; e os métodos buscar() (valide 3+ letras, ligue carregando, chame catalogo.buscar(...).pipe(finalize(...)).subscribe({ next, error })) e importar(item) (livroService.adicionar + router.navigate).

  > Dica: `Ctrl + Shift + F` e busque `TODO 5` para ver todos os pontos deste passo.

#### TODO 6 - logInterceptor
- [ ] **Arquivo:** `src/app/app.config.ts`  
  **O que fazer:** Importe o logInterceptor de './interceptors/log-interceptor'.
- [ ] **Arquivo:** `src/app/interceptors/log-interceptor.ts`  
  **O que fazer:** Crie o logInterceptor: HttpInterceptorFn = (req, next) => ... Guarde performance.now() e devolva next(req).pipe(tap({ next, error })) registrando no console método, URL, status e tempo.

  > Dica: `Ctrl + Shift + F` e busque `TODO 6` para ver todos os pontos deste passo.

#### TODO 7 - BÔNUS: rapidApiInterceptor
- [ ] **Arquivo:** `src/app/interceptors/rapidapi-interceptor.ts`  
  **O que fazer:** BÔNUS: crie o rapidApiInterceptor. Se a URL contiver o host da RapidAPI, use req.clone({ setHeaders: { 'X-RapidAPI-Key': ..., 'X-RapidAPI-Host': ... } }); senão repasse req. Para usar: coloque-o em withInterceptors([...]) no app.config.

  > Dica: `Ctrl + Shift + F` e busque `TODO 7` para ver todos os pontos deste passo.

## Como saber se deu certo
- Digitar letras no CEP não funciona; `88010400` preenche **Florianópolis/SC**; `99999999` mostra a mensagem de erro.
- "Buscando CEP..." aparece durante a consulta (DevTools > Network mostra `viacep.com.br`).
- Buscar "angular" no catálogo lista livros com capa; **Importar** leva o livro para a lista.
- Em **Network > Offline** aparece a mensagem de erro (não uma tela em branco).
- O console mostra linhas `[HTTP] GET ... -> 200 (xx ms)`.

## Erros comuns
| Mensagem / sintoma | Causa provável |
|---|---|
| No provider for HttpClient | Faltou `provideHttpClient()` |
| Nada acontece / sem requisição | Faltou `subscribe` |
| blocked by CORS policy | A API não libera a origem |
| A tela não muda depois da resposta | Estado em variável comum; use `signal` |
| Cannot read properties of undefined | Campo ausente na resposta; use `?.` e `??` |

## Seu projeto está em outra versão?
Antes do Angular 22: `@Service()` -> `@Injectable({ providedIn: 'root' })`, `standalone: true` nos componentes/diretivas/pipes e `provideZoneChangeDetection({ eventCoalescing: true })` no `app.config.ts`.

## Gabarito
`gabarito/src/app` - código completo e comentado.
