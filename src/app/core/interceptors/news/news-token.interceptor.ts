import { Injectable } from '@angular/core';
import { BaseTokenInterceptor } from '../base-token-interceptor/base-token.interceptor';
import { environment } from 'src/environment';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class NewsTokenInterceptor extends BaseTokenInterceptor {

  public getRequestUrlWithAuthToken(url: string): string {
    return url.replace(/{{key}}/, environment.mediastack_key);
  }

  public override isValid(request: HttpRequest<any>): boolean {
    return request.url.includes('mediastack');
  }
}