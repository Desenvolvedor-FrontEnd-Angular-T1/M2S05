import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

// TODO 7: Registre os dados de localização do português (registerLocaleData(localePt)); sem isso os pipes date e currency falam inglês.

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // TODO 1: Registre as rotas no providers: provideRouter(routes, withComponentInputBinding()). O withComponentInputBinding entrega parâmetros da URL como input() do componente.
    // TODO 7: Defina o idioma padrão dos pipes: { provide: LOCALE_ID, useValue: 'pt-BR' }.
  ],
};
