import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseTokenInterceptor implements HttpInterceptor {

  abstract getAuthToken(): string;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.getAuthToken();
    const authReq = req.clone({
      url: req.url + authToken
    });
    return next.handle(authReq);
  }
}