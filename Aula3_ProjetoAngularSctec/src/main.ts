// main.ts - PORTA DE ENTRADA do TypeScript. É o primeiro código que roda.
// Ele "dá a partida" (bootstrap) no componente raiz App usando as configurações de app.config.ts.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
