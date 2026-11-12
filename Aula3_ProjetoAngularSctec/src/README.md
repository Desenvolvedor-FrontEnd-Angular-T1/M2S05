# projeto-angular-sctec · Aula 3 (12/11) · Projeto base do curso

> **Este é o projeto que vai acompanhar você até o fim do curso.** Hoje você cria o projeto, entende cada pasta,
> gera componente e service pela CLI, cola esta pasta `src` e completa **5 TODOs curtos**.
> Nas próximas semanas, os conteúdos novos entram **dentro deste mesmo projeto**.

Todos os comandos do Angular estão em **[README_COMANDOS.md](README_COMANDOS.md)**.

---

## Sumário
1. [Roteiro da aula (1h30)](#1-roteiro-da-aula-1h30)
2. [Passo a passo: criar o projeto e colar o src](#2-passo-a-passo-criar-o-projeto-e-colar-o-src)
3. [O que é um projeto Angular](#3-o-que-é-um-projeto-angular)
4. [Arquivos e pastas que o `ng new` cria](#4-arquivos-e-pastas-que-o-ng-new-cria)
5. [Como o Angular "liga" a aplicação](#5-como-o-angular-liga-a-aplicação)
6. [O que é um Componente e como criar](#6-o-que-é-um-componente-e-como-criar)
7. [O que é um Service e como criar](#7-o-que-é-um-service-e-como-criar)
8. [O que vem nesta pasta src](#8-o-que-vem-nesta-pasta-src)
9. [TODOs de hoje: o que fazer e onde](#9-todos-de-hoje-o-que-fazer-e-onde)
10. [Checklist final](#10-checklist-final)
11. [Erros comuns](#11-erros-comuns)
12. [Revisão: o que já vimos no curso](#12-revisão-o-que-já-vimos-no-curso)

---

## 1. Roteiro da aula (1h30)

| Tempo | Etapa | O que você faz |
|---|---|---|
| 0:00 – 0:15 | **Etapa 1 - Criar o projeto** | `ng new projeto-angular-sctec` e tour pelas pastas e arquivos (seções 3, 4 e 5) |
| 0:15 – 0:20 | **Etapa 2 - Gerar pela CLI** | `ng generate component` e `ng generate service` (seções 6 e 7) |
| 0:20 – 0:25 | **Etapa 3 - Colar o src** | Copiar esta pasta `src` por cima da sua e rodar `ng serve` |
| 0:25 – 0:35 | **TODO 1** | 2 rotas |
| 0:35 – 0:50 | **TODO 2** | Formulário Template-Driven (3 campos) |
| 0:50 – 1:00 | **TODO 3** | Formulário Reativo (5 campos, `fb.group`) |
| 1:00 – 1:10 | **TODO 4** | Pipe padrão + pipe personalizado |
| 1:10 – 1:25 | **TODO 5** | Conectar a API viaCEP (service + componente) |
| 1:25 – 1:30 | **Fechamento** | Checklist final e commit no GitHub |

---

## 2. Passo a passo: criar o projeto e colar o src

### Etapa 1 - Criar o projeto
Abra o terminal na pasta onde você guarda seus projetos (ex.: `Documentos`):

```bash
ng version                                          # confere se o Angular CLI está instalado
ng new projeto-angular-sctec --style=css --ssr=false
```
Se o `ng new` fizer perguntas: estilo **CSS**, SSR **No**, o resto pode aceitar o padrão (Enter).
Ele cria a pasta, os arquivos e roda o `npm install` (demora um pouco).

```bash
cd projeto-angular-sctec
code .                       # abre o projeto no VS Code
ng serve -o                  # roda e abre http://localhost:4200 (página padrão do Angular)
```
Pare o servidor com `Ctrl + C` antes de seguir.

### Etapa 2 - Gerar componente e service pela CLI
Ainda **dentro** da pasta `projeto-angular-sctec`:

```bash
ng generate component pages/cadastro-aluno     # atalho: ng g c pages/cadastro-aluno
ng generate service services/cep-service       # atalho: ng g s services/cep-service
```
Opcional (para ver a CLI criando outros tipos de arquivo):
```bash
ng g c pages/contato
ng g c pages/inicio
ng g p pipes/cep                               # p = pipe
```
Abra os arquivos gerados e observe: o componente vem com **4 arquivos** (`.ts`, `.html`, `.css`, `.spec.ts`)
e o service com **2** (`.ts`, `.spec.ts`). Os nomes são **os mesmos** desta pasta `src`. Por isso, ao colar,
o seu arquivo gerado é substituído pela versão já preparada.

### Etapa 3 - Colar esta pasta src
1. No repositório, copie a pasta **`Aula3_ProjetoAngularSctec/src`**.
2. Cole dentro da pasta **`projeto-angular-sctec`** (onde já existe a `src` criada pelo `ng new`).
3. O Windows pergunta o que fazer: escolha **"Substituir os arquivos no destino"**.
4. Rode de novo:
   ```bash
   ng serve -o
   ```
5. Deve abrir o **Portal do Aluno** com o roteiro da aula na tela inicial. Pronto para os TODOs!

> Para achar cada ponto de prática no VS Code: `Ctrl + Shift + F` e busque **`TODO 1`**, **`TODO 2`**...

---

## 3. O que é um projeto Angular

**Angular** é um *framework* (criado pelo Google) para construir aplicações web em **TypeScript**.

- **SPA (Single Page Application):** existe **uma única página HTML** (`index.html`). O Angular troca o conteúdo
  dela conforme a navegação, **sem recarregar** o navegador.
- **Baseado em componentes:** a tela é montada com "peças" reutilizáveis (cabeçalho, formulário, cartão...).
- **TypeScript:** JavaScript + tipos. O Angular **compila** o `.ts` para `.js`, que é o que o navegador entende.
- **Angular CLI (`ng`):** a ferramenta de linha de comando que cria o projeto, gera arquivos, roda e compila.
- **Ferramentas incluídas:** rotas (`@angular/router`), formulários (`@angular/forms`), HTTP (`@angular/common/http`).

---

## 4. Arquivos e pastas que o `ng new` cria

### Raiz do projeto (`projeto-angular-sctec/`)

| Arquivo / pasta | O que é | Mexemos? |
|---|---|---|
| `node_modules/` | Todas as bibliotecas instaladas pelo `npm install` (Angular, RxJS, TypeScript...). Pasta enorme. | **Nunca.** Não vai para o GitHub (está no `.gitignore`). Se apagar, recrie com `npm install`. |
| `public/` | Arquivos estáticos copiados como estão: `favicon.ico`, imagens, PDFs. | Sim, para colocar imagens. |
| `src/` | **O código da aplicação.** É aqui que trabalhamos. | **Sim, sempre.** |
| `angular.json` | Configuração da CLI: onde está o `index.html`, o `main.ts`, os estilos globais, pasta de saída do build, porta... | Raramente. |
| `package.json` | "Carteira de identidade" do projeto: nome, **scripts** (`npm start`, `npm run build`) e a lista de **dependências** com versões. | Às vezes (o `npm install pacote` atualiza sozinho). |
| `package-lock.json` | Trava as versões **exatas** instaladas, para todo mundo ter o mesmo ambiente. | Nunca à mão. |
| `tsconfig.json` | Regras do compilador TypeScript para o projeto todo (modo estrito, versão do JS gerado...). | Raramente. |
| `tsconfig.app.json` | Configuração do TypeScript para **compilar a aplicação**. | Raramente. |
| `tsconfig.spec.json` | Configuração do TypeScript para **os testes** (`*.spec.ts`). | Raramente. |
| `.editorconfig` | Padrão de formatação do editor (espaços, fim de linha). | Não. |
| `.prettierrc` | Regras do formatador Prettier. | Não. |
| `.gitignore` | Lista do que o Git **ignora** (`node_modules`, `dist`...). | Raramente. |
| `.vscode/` | Configurações recomendadas para o VS Code (extensões, depuração). | Não. |
| `README.md` | Documentação gerada pela CLI (em inglês). | Opcional. |
| `dist/` | **Só aparece depois do `ng build`**: a versão final compilada para publicar. | Não (é gerada). |

### Dentro de `src/`

| Arquivo | O que é | O que vem nele |
|---|---|---|
| `index.html` | A **única página HTML** do site. | Um `<body>` com a tag `<app-root></app-root>`. |
| `main.ts` | **Porta de entrada** do TypeScript: o primeiro código que roda. | `bootstrapApplication(App, appConfig)`: inicia o componente raiz com as configurações. |
| `styles.css` | **CSS global** (vale para o app inteiro). | Vazio no início. |
| `app/app.ts` | **Componente raiz** (`App`). | Classe com o decorator `@Component` (seletor `app-root`). |
| `app/app.html` | HTML do componente raiz. | Página de boas-vindas do Angular + `<router-outlet />`. |
| `app/app.css` | CSS **só** do componente raiz. | Vazio. |
| `app/app.config.ts` | **Configuração global**: liga recursos (rotas, HttpClient...). | `provideRouter(routes)` e `provideBrowserGlobalErrorListeners()`. |
| `app/app.routes.ts` | **Mapa de rotas**: URL → componente. | `export const routes: Routes = [];` (vazio). |
| `app/app.spec.ts` | **Teste automatizado** do componente raiz (`ng test`). | Testes de exemplo. |

> Os arquivos `.spec.ts` são **testes**. Eles não aparecem na tela e não entram no build da aplicação.

---

## 5. Como o Angular "liga" a aplicação

```
navegador abre  index.html  ──►  encontra <app-root>
                    │
                main.ts  ──►  bootstrapApplication(App, appConfig)
                    │                         │
                    │                 app.config.ts  (rotas, HttpClient, idioma)
                    ▼
              App (app.ts + app.html)  ──►  cabeçalho + menu + <router-outlet />
                                                         │
                               app.routes.ts decide qual página entra aqui:
                               /          → Inicio
                               /contato   → Contato        (TODO 1)
                               /cadastro  → CadastroAluno  (TODO 1)
```

---

## 6. O que é um Componente e como criar

**Componente** = uma **peça da tela** com seu próprio HTML, CSS e lógica (TypeScript).
Uma página inteira é um componente; um cartão ou um cabeçalho também pode ser.

### Como criar
```bash
ng generate component pages/cadastro-aluno
# ou o atalho:
ng g c pages/cadastro-aluno
```
A CLI cria a pasta `src/app/pages/cadastro-aluno/` com 4 arquivos:

| Arquivo | Papel |
|---|---|
| `cadastro-aluno.ts` | A **classe** com a lógica (dados e métodos) + o decorator `@Component` |
| `cadastro-aluno.html` | O **template**: o que aparece na tela |
| `cadastro-aluno.css` | O **estilo**, que vale **só** para este componente |
| `cadastro-aluno.spec.ts` | O **teste** automatizado |

### Anatomia
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',     // tag para usar em outro HTML: <app-cadastro-aluno />
  imports: [],                        // o que o HTML deste componente usa (ReactiveFormsModule, pipes...)
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.css',
})
export class CadastroAluno {           // nome da classe = nome usado nas rotas e nos imports
  titulo = 'Cadastro';                 // propriedade → aparece no HTML com {{ titulo }}
  salvar() { /* ... */ }               // método → chamado no HTML com (click)="salvar()"
}
```
Um componente aparece na tela de **duas formas**: pela **tag** (`<app-cadastro-aluno />`) ou por uma **rota**
(`{ path: 'cadastro', component: CadastroAluno }`). Neste projeto, as páginas aparecem por rota.

---

## 7. O que é um Service e como criar

**Service** = uma classe para o que **não é tela**: buscar dados numa API, guardar informações compartilhadas,
regras de negócio. Os componentes **pedem** o service em vez de fazerem tudo sozinhos.

- **Por quê?** Separação de responsabilidades: o componente cuida da tela e o service, dos dados.
  Vários componentes podem usar o **mesmo** service.
- **Injeção de dependência (DI):** você não faz `new CepService()`. Você **pede** ao Angular com `inject()`,
  e ele entrega uma instância pronta e compartilhada.

### Como criar
```bash
ng generate service services/cep-service
# ou o atalho:
ng g s services/cep-service
```
A CLI cria `src/app/services/cep-service.ts` (e o teste `cep-service.spec.ts`):

```ts
import { Service } from '@angular/core';

@Service()                 // Angular 22: disponível para o app inteiro (versões antigas: @Injectable({ providedIn: 'root' }))
export class CepService {}
```

### Como usar no componente
```ts
export class CadastroAluno {
  private cepService = inject(CepService);   // DI: o Angular entrega o service pronto

  buscar() {
    this.cepService.buscar('88010000').subscribe((endereco) => console.log(endereco));
  }
}
```

---

## 8. O que vem nesta pasta src

**Tudo já está pronto** (layout, CSS, componentes, service, pipe, modelos). Você só completa os TODOs.

```
src/
├── index.html                 Página única. Tag <app-root>
├── main.ts                    Porta de entrada: inicia o App
├── styles.css                 Cores e classes globais (.card, .campo, .btn, .erro...)
├── README.md                  Este arquivo
├── README_COMANDOS.md         Todos os comandos do Angular
└── app/
    ├── app.ts / .html / .css  Componente raiz: cabeçalho, menu, <router-outlet>, rodapé
    ├── app.config.ts          Configuração global: rotas, HttpClient e idioma pt-BR (pronto)
    ├── app.routes.ts          Mapa de rotas ............................... TODO 1
    ├── app.spec.ts            Teste do App
    ├── models/                Interfaces (formato dos dados)
    │   ├── aluno.ts
    │   ├── endereco.ts        Formato da resposta da viaCEP
    │   └── mensagem-contato.ts
    ├── pages/                 Componentes de PÁGINA (abertos por rota)
    │   ├── inicio/            Página inicial com o roteiro (pronta)
    │   ├── contato/           Form Template-Driven ........................ TODO 2
    │   └── cadastro-aluno/    Form Reativo + pipes + API ........ TODO 3, 4 e 5
    ├── services/
    │   └── cep-service.ts     Chamada à API viaCEP ........................ TODO 5
    └── pipes/
        └── cep-pipe.ts        Pipe personalizado 88010000 → 88010-000 ..... TODO 4
```

**Por que essa organização?** `pages/` (telas), `services/` (dados), `pipes/` (formatação), `models/` (tipos).
Nas próximas semanas, os novos arquivos entram nessas mesmas pastas (ou em novas, como `components/` e `guards/`).

---

## 9. TODOs de hoje: o que fazer e onde

Cada TODO está **comentado no próprio arquivo**, com o código esperado. Siga a ordem: 1 → 5.
Depois de cada um, salve (`Ctrl + S`) e veja o resultado no navegador (o `ng serve` recarrega sozinho).

### TODO 1 - Rotas (2 roteamentos)
| | |
|---|---|
| **Arquivo** | `src/app/app.routes.ts` |
| **O que fazer** | Criar as rotas `contato` → `Contato` e `cadastro` → `CadastroAluno`, **acima** da rota `'**'`. |
| **Já está pronto** | Os imports dos componentes, a rota `''` (modelo) e os links do menu no `app.html`. |
| **Como testar** | Clique em **Contato** e **Cadastro de aluno** no menu: a página muda e a URL também. |

```ts
{ path: 'contato', component: Contato, title: 'Contato | Projeto SCTEC' },
{ path: 'cadastro', component: CadastroAluno, title: 'Cadastro | Projeto SCTEC' },
```

### TODO 2 - Formulário Template-Driven (3 campos)
| | |
|---|---|
| **Arquivo** | `src/app/pages/contato/contato.html` |
| **O que fazer** | **Digitar** o `<form #f="ngForm">` com os campos **nome**, **e-mail** e **mensagem** usando `[(ngModel)]`, validações (`required`, `minlength`, `email`) e mensagens de erro. |
| **Já está pronto** | O `contato.ts` (objeto `contato`, método `enviar(f)`, `FormsModule`), o CSS e o aviso de sucesso. |
| **Como testar** | Clique em Enviar com tudo vazio: aparecem os erros. Preencha certo: aparece "Obrigado, ...". |

Ideia central: no Template-Driven, **o HTML manda**. `[(ngModel)]` liga o campo ao objeto do `.ts` (two-way binding)
e `#nome="ngModel"` dá acesso ao estado do campo (`invalid`, `touched`).

### TODO 3 - Formulário Reativo (5 campos)
| | |
|---|---|
| **Arquivo** | `src/app/pages/cadastro-aluno/cadastro-aluno.ts` |
| **O que fazer** | Trocar `form = this.fb.group({});` pelo `fb.group` com **nome, email, telefone, curso e cep** e seus `Validators`. |
| **Já está pronto** | Todo o HTML (`[formGroup]`, `formControlName`, mensagens de erro), `invalido()`, `enviar()`, `limpar()`. |
| **Como testar** | O aviso amarelo some e o formulário aparece. Campos errados ficam vermelhos ao sair deles. |

Ideia central: no Reactive Forms, **o TypeScript manda**. A estrutura e as validações ficam no `.ts`;
o HTML só se conecta pelo `formControlName` (os nomes precisam ser **iguais**).

### TODO 4 - Pipes (padrão + personalizado)
| Parte | Arquivo | O que fazer |
|---|---|---|
| **A** | `src/app/pipes/cep-pipe.ts` | No `transform`, devolver o CEP com hífen: `` `${valor.slice(0, 5)}-${valor.slice(5)}` `` |
| **B** | `src/app/pages/cadastro-aluno/cadastro-aluno.ts` | Acrescentar `UpperCasePipe, DatePipe, CepPipe` no array `imports` do `@Component` |
| **C** | `src/app/pages/cadastro-aluno/cadastro-aluno.html` | No "Resumo do cadastro": `aluno.nome \| uppercase`, `aluno.cadastradoEm \| date: 'dd/MM/yyyy HH:mm'` e `aluno.cep \| cep` |

**Como testar:** salve um cadastro válido. No resumo, o nome aparece em MAIÚSCULAS, a data como `12/11/2026 19:30`
e o CEP como `88010-000`.
Pipe = **transforma o valor só na exibição**, sem alterar o dado original.

### TODO 5 - Conectar a API (viaCEP)
| Parte | Arquivo | O que fazer |
|---|---|---|
| **A** | `src/app/services/cep-service.ts` | No `buscar(cep)`, trocar o `throwError(...)` por `return this.http.get<Endereco>(\`${this.urlBase}/${cep}/json/\`);` |
| **B** | `src/app/pages/cadastro-aluno/cadastro-aluno.ts` | No `buscarCep()`, trocar a linha do aviso por `this.carregando.set(true)` + `this.cepService.buscar(cep).subscribe({ next, error })` (código completo no comentário) |

**Já está pronto:** `provideHttpClient()` no `app.config.ts`, o modelo `Endereco`, os signals `carregando`, `erroCep`
e `endereco` e o quadro azul que mostra o endereço.
**Como testar:** no Cadastro, digite `88010000` e clique em **Buscar CEP**. Aparece "Rua Felipe Schmidt - Centro ·
Florianópolis / SC". Teste também `99999999` ("CEP não encontrado"). **Precisa de internet.**

Ideia central: o **service** faz a requisição e devolve um **Observable**. O **componente** faz o `.subscribe()`
(sem `subscribe` a requisição **não sai**) e trata **sucesso** (`next`) e **falha** (`error`).
Dica: abra o DevTools (`F12` → aba **Network/Rede**) e veja a chamada para `viacep.com.br`.

> **Outras APIs para explorar depois** (mesma ideia: service + `http.get` + `subscribe`):
> Open Library (`https://openlibrary.org/search.json?q=angular`, sem chave) e RapidAPI (exige chave:
> **nunca** suba a chave para o GitHub).

---

## 10. Checklist final

- [ ] Projeto `projeto-angular-sctec` criado com `ng new` e rodando com `ng serve`
- [ ] Componente `pages/cadastro-aluno` e service `services/cep-service` gerados pela CLI
- [ ] Pasta `src` do repositório colada por cima da minha
- [ ] **TODO 1:** menu navega para `/contato` e `/cadastro`
- [ ] **TODO 2:** form de contato valida os 3 campos e mostra a mensagem de sucesso
- [ ] **TODO 3:** form de cadastro com 5 campos e validações
- [ ] **TODO 4:** resumo com `uppercase`, `date` e `cep`
- [ ] **TODO 5:** "Buscar CEP" preenche o endereço pela viaCEP
- [ ] `ng build` roda sem erros
- [ ] Projeto enviado para o meu GitHub (ver [README_COMANDOS.md](README_COMANDOS.md#git-salvar-o-projeto-no-github))

---

## 11. Erros comuns

| Sintoma | Causa provável | Solução |
|---|---|---|
| `ng : O termo 'ng' não é reconhecido` | Angular CLI não instalado | `npm install -g @angular/cli` |
| `ng.ps1 não pode ser carregado... execução de scripts desabilitada` | Política do PowerShell no Windows | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (responda `S`) |
| `Port 4200 is already in use` | Outro `ng serve` aberto | Feche o outro terminal ou use `ng serve --port 4300` |
| Clico em Contato e volto para o Início | TODO 1 não feito, ou rota escrita **abaixo** do `'**'` | Coloque as rotas acima do `'**'` |
| `No value accessor` / `ngModel` não funciona | Falta o `name` no input | Todo campo com `ngModel` precisa de `name="..."` |
| `Cannot find control with name: 'xxx'` | Nome no `fb.group` diferente do `formControlName` | Use os mesmos nomes: nome, email, telefone, curso, cep |
| `No pipe found with name 'cep'` | Pipe não está no `imports` do componente | TODO 4 parte B |
| Clico em Buscar CEP e nada acontece | Faltou o `.subscribe()` | TODO 5 parte B |
| `NullInjectorError: No provider for HttpClient` | `provideHttpClient()` removido do `app.config.ts` | Recoloque (já vem pronto) |
| Tela branca | Erro de compilação | Leia o terminal do `ng serve` e o console do navegador (`F12`) |

---

## 12. Revisão: o que já vimos no curso

| Bloco | Conteúdo | Onde aparece neste projeto |
|---|---|---|
| **TypeScript Básico** | Tipos primitivos, arrays, tuplas, tipagem de parâmetros e retorno, parâmetros opcionais/default | `buscar(cep: string): Observable<Endereco>`, `invalido(campo: string): boolean` |
| **TypeScript Intermediário** | Classes, modificadores de acesso, interfaces, propriedades opcionais, `readonly` | `models/*.ts` (interfaces), `private`, `readonly cursos`, `erro?:` |
| **Angular Inicial** | Ambiente, arquitetura, componentes, interpolação, diretivas, binding de dados e eventos | `{{ titulo }}`, `@if`, `@for`, `[disabled]`, `(click)`, `(ngSubmit)` |
| **Angular Intermediário** | Services, injeção de dependência, componentes reativos, Observables e RxJS, GitHub | `inject(CepService)`, `signal()`, `.subscribe()`, `Observable` |
| **Angular Avançado** | Formulários, roteamento, pipes, consumo de APIs | **TODOs 1 a 5 de hoje** |
