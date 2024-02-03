import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class BaseTokenInterceptor implements HttpInterceptor {

  abstract getRequestUrlWithAuthToken(url: string): string;

  abstract isValid(request: HttpRequest<any>): boolean;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isValid(req)) {
      return next.handle(req);
    } 
    const requestUrl = this.getRequestUrlWithAuthToken(req.url);
    const authReq = req.clone({
      url: requestUrl
    });
    return next.handle(authReq);
  }
}