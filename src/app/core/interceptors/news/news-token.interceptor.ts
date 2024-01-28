import { Injectable } from '@angular/core';
import { BaseTokenInterceptor } from '../base-token-interceptor/base-token.interceptor';
import { NewsQueryParams } from 'src/app/features/news/enum/news';
import { environment } from 'src/environment';

@Injectable()
export class NewsTokenInterceptor extends BaseTokenInterceptor {

  public getAuthToken(): string {
    return NewsQueryParams.KEY.replace(/{{.*}}/, environment.news_api_key);
  }
}