// log-interceptor.ts - INTERCEPTOR funcional: passa por TODA requisição HTTP do app (ida e volta).
import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

// TODO 6: Crie o logInterceptor: HttpInterceptorFn = (req, next) => ... Guarde performance.now() e devolva next(req).pipe(tap({ next, error })) registrando no console método, URL, status e tempo.
