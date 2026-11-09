// rapidapi-interceptor.ts - BÔNUS (exemplo, não está ligado ao app): como enviar a chave de uma API da RapidAPI.
import { HttpInterceptorFn } from '@angular/common/http';

// TODO 7: BÔNUS: crie o rapidApiInterceptor. Se a URL contiver o host da RapidAPI, use req.clone({ setHeaders: { 'X-RapidAPI-Key': ..., 'X-RapidAPI-Host': ... } }); senão repasse req. Para usar: coloque-o em withInterceptors([...]) no app.config.
