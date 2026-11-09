// app.ts - agora é só o "esqueleto" (shell) da aplicação: cabeçalho + menu + espaço onde as páginas aparecem.
import { Component } from '@angular/core';
// TODO 2: Importe RouterOutlet, RouterLink e RouterLinkActive de '@angular/router' e coloque-os no array imports.

@Component({
  selector: 'app-root',
  // TODO 2: Preencha imports: [RouterOutlet, RouterLink, RouterLinkActive].
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Biblioteca Web';
}
