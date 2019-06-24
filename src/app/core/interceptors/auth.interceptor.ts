import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headersConfig = req.clone({headers: req.headers.set('Accept', 'application/json')})

    const token = localStorage.getItem('token')

    if (token) {
      headersConfig = headersConfig.clone({ headers: headersConfig.headers.set('Authorization', `jwt ${token}`) });
    }

    if (!headersConfig.headers.has('Content-Type') && !(headersConfig.body instanceof FormData)) {
      headersConfig = headersConfig.clone({ headers: headersConfig.headers.set('Content-Type', 'application/json') });
    }

    const request = headersConfig.clone();
    return next.handle(request);
  }
}