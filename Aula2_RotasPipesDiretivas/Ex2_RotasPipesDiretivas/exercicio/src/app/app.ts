// app.ts - agora é só o "esqueleto" (shell) da aplicação: cabeçalho + menu + espaço onde as páginas aparecem.
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'Biblioteca Web';
}
