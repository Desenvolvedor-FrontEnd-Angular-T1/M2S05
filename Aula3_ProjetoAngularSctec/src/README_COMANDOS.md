# Comandos do Angular · projeto-angular-sctec

Guia de consulta rápida. Rode os comandos no terminal do VS Code (`Ctrl + '`) **dentro da pasta do projeto**,
exceto os de instalação e o `ng new`.

> `ng` é o Angular CLI. Quase todo comando tem um **atalho**: `generate` = `g`, `component` = `c`, `service` = `s`, `pipe` = `p`.

---

## 1. Preparar o ambiente (uma vez por computador)

| Comando | O que faz |
|---|---|
| `node -v` | Mostra a versão do Node.js (precisa estar instalado: https://nodejs.org, versão LTS) |
| `npm -v` | Mostra a versão do npm (vem junto com o Node) |
| `npm install -g @angular/cli` | Instala o Angular CLI **globalmente** (o comando `ng` passa a existir) |
| `ng version` | Mostra a versão do Angular CLI, do Node e dos pacotes do projeto |
| `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` | **Windows/PowerShell:** libera a execução do `ng` se aparecer o erro "execução de scripts foi desabilitada" |

---

## 2. Criar o projeto

```bash
ng new projeto-angular-sctec --style=css --ssr=false
cd projeto-angular-sctec
code .
```

| Opção | Significado |
|---|---|
| `--style=css` | Usa CSS puro nos estilos (outras opções: scss, sass, less) |
| `--ssr=false` | Sem Server-Side Rendering (não precisamos agora) |
| `--skip-tests` | Não cria os arquivos `.spec.ts` |
| `--skip-git` | Não inicia um repositório Git |
| `--skip-install` | Não roda o `npm install` (rode depois manualmente) |
| `--routing` | Garante a configuração de rotas (já vem por padrão nas versões novas) |

---

## 3. Rodar o projeto (desenvolvimento)

| Comando | O que faz |
|---|---|
| `ng serve` | Compila e sobe o servidor em **http://localhost:4200**. Recarrega sozinho a cada `Ctrl + S` |
| `ng serve -o` | Igual, e **abre** o navegador automaticamente |
| `ng serve --port 4300` | Usa outra porta (quando a 4200 está ocupada) |
| `npm start` | Atalho definido no `package.json` (roda `ng serve`) |
| `Ctrl + C` | **Para** o servidor no terminal |

---

## 4. Compilar (build para publicar)

| Comando | O que faz |
|---|---|
| `ng build` | Compila a versão de **produção** (otimizada) na pasta `dist/projeto-angular-sctec/` |
| `ng build --configuration development` | Build de desenvolvimento (mais rápido, sem otimização) |
| `ng build --watch` | Recompila a cada alteração |
| `npm run build` | Atalho do `package.json` para `ng build` |

> O build transforma TypeScript em JavaScript, junta tudo em poucos arquivos e otimiza.
> O conteúdo de `dist/.../browser` é o que vai para um servidor de hospedagem.

---

## 5. Gerar arquivos (`ng generate`)

Rode na **raiz do projeto**. O caminho é relativo a `src/app/`.

| O que | Comando completo | Atalho | Cria |
|---|---|---|---|
| **Componente** | `ng generate component pages/cadastro-aluno` | `ng g c pages/cadastro-aluno` | `cadastro-aluno.ts`, `.html`, `.css`, `.spec.ts` |
| **Service** | `ng generate service services/cep-service` | `ng g s services/cep-service` | `cep-service.ts`, `.spec.ts` |
| **Pipe** | `ng generate pipe pipes/cep` | `ng g p pipes/cep` | `cep-pipe.ts`, `.spec.ts` |
| **Diretiva** | `ng generate directive directives/destaque` | `ng g d directives/destaque` | `destaque.ts`, `.spec.ts` |
| **Guard** (rotas) | `ng generate guard guards/auth` | `ng g g guards/auth` | `auth-guard.ts`, `.spec.ts` |
| **Interceptor** (HTTP) | `ng generate interceptor interceptors/log` | — | `log-interceptor.ts`, `.spec.ts` |
| **Interface** | `ng generate interface models/aluno` | `ng g i models/aluno` | `aluno.ts` |
| **Classe** | `ng generate class models/turma` | `ng g cl models/turma` | `turma.ts`, `.spec.ts` |
| **Enum** | `ng generate enum models/status` | `ng g e models/status` | `status.ts` |

Opções úteis para qualquer `generate`:

| Opção | O que faz |
|---|---|
| `--dry-run` | **Simula**: mostra o que seria criado, sem criar nada (ótimo para conferir antes) |
| `--skip-tests` | Não cria o `.spec.ts` |
| `--inline-template` / `--inline-style` | Componente com HTML/CSS dentro do próprio `.ts` |
| `ng generate --help` | Lista todos os tipos que a CLI sabe gerar |

**Comandos usados na aula de hoje:**
```bash
ng g c pages/cadastro-aluno
ng g s services/cep-service
# opcionais:
ng g c pages/contato
ng g c pages/inicio
ng g p pipes/cep
```

---

## 6. Testes

| Comando | O que faz |
|---|---|
| `ng test` | Roda os testes (`*.spec.ts`) e fica observando alterações |
| `ng test --watch=false` | Roda uma vez e termina |

---

## 7. Pacotes e manutenção

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências do `package.json` (use depois de **clonar** um projeto ou se apagar o `node_modules`) |
| `npm install nome-do-pacote` | Adiciona uma biblioteca ao projeto |
| `npm uninstall nome-do-pacote` | Remove uma biblioteca |
| `ng add @angular/material` | Instala **e configura** uma biblioteca compatível com Angular |
| `ng update` | Mostra o que pode ser atualizado |
| `ng update @angular/core @angular/cli` | Atualiza o Angular do projeto |
| `ng cache clean` | Limpa o cache da CLI (quando o build se comporta de forma estranha) |
| `ng help` | Lista todos os comandos do `ng` |

---

## 8. Git: salvar o projeto no GitHub

Este projeto vai ser usado nas próximas semanas, então **guarde-o no seu GitHub**.
Crie um repositório vazio no GitHub chamado `projeto-angular-sctec` e rode:

```bash
git init                                   # só se o projeto ainda não tiver Git (o ng new já costuma iniciar)
git add .
git commit -m "Aula 3: projeto base com forms, rotas, pipes e API"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/projeto-angular-sctec.git
git push -u origin main
```

Nas próximas aulas:
```bash
git add .
git commit -m "descreva o que mudou"
git push
```

Em outro computador:
```bash
git clone https://github.com/SEU-USUARIO/projeto-angular-sctec.git
cd projeto-angular-sctec
npm install          # o node_modules não vai para o GitHub, então reinstale
ng serve -o
```

---

## 9. Atalhos do VS Code que ajudam

| Atalho | O que faz |
|---|---|
| `Ctrl + '` | Abre/fecha o terminal |
| `Ctrl + Shift + F` | Busca em todos os arquivos (use para achar `TODO 1`, `TODO 2`...) |
| `Ctrl + P` | Abre um arquivo pelo nome |
| `Ctrl + S` | Salva (o `ng serve` recarrega o navegador) |
| `F12` no navegador | DevTools: aba **Console** (erros) e aba **Network/Rede** (chamadas à API) |
