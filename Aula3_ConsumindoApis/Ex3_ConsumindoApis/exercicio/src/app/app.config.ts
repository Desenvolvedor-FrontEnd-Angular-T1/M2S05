import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
// TODO 6: Importe o logInterceptor de './interceptors/log-interceptor'.

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    // TODO 1: Habilite o HttpClient para a aplicação toda: provideHttpClient(). No passo 6 você vai trocar por provideHttpClient(withInterceptors([logInterceptor])).
  ],
};
