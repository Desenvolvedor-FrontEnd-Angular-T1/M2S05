// app.config.ts - CONFIGURAÇÃO GLOBAL da aplicação.
// Cada "provide..." liga um recurso que o app inteiro pode usar. (JÁ ESTÁ PRONTO: só leia e entenda.)
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// Ensina ao Angular o formato brasileiro (datas, números, moeda) usado pelos pipes.
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),       // mostra no console erros não tratados
    provideRouter(routes),                       // liga o ROTEAMENTO usando a lista de app.routes.ts
    provideHttpClient(),                         // liga o HttpClient: necessário para chamar APIs (TODO 5)
    { provide: LOCALE_ID, useValue: 'pt-BR' },   // idioma padrão dos pipes: date, currency, number...
  ],
};
