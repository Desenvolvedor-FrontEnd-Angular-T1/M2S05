// app.ts - COMPONENTE RAIZ (o "esqueleto" do site): cabeçalho + menu + <router-outlet> + rodapé.
// As páginas (Início, Contato, Cadastro) aparecem dentro do <router-outlet>, conforme a rota.
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',                                   // tag usada no index.html: <app-root>
  imports: [RouterOutlet, RouterLink, RouterLinkActive],  // o que o HTML deste componente usa
  templateUrl: './app.html',                              // o HTML do componente
  styleUrl: './app.css',                                  // o CSS do componente
})
export class App {
  protected readonly titulo = 'Portal do Aluno';
  protected readonly curso = 'Desenvolvedor Front-End [Angular] - SCTEC';
  protected readonly ano = new Date().getFullYear();
}
