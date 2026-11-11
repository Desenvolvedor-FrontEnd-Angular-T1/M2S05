import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

// Registra os dados de localização do português; sem isso os pipes date e currency falam inglês.
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Registra as rotas. withComponentInputBinding entrega parâmetros da URL (:id) como input() do componente.
    provideRouter(routes, withComponentInputBinding()),
    // Idioma padrão dos pipes (date, currency...).
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
};
