import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { NewsQueryParams, NewsUrlInfo } from "src/app/features/news/enum/news";
import { Article, HeadlineResponse } from "src/app/features/news/model/news-model";
import { replace } from "src/app/shared/text-helpers";
import { ArticleState } from "src/app/store/state/articles.state";

@Injectable({
    providedIn: 'root'
  })
  export class NewsDataService {
    constructor(private httpClient: HttpClient, private store: Store<{ articles: ArticleState }>) {}
  
    public fetchAllArticles(): Observable<Article[]> {
      const requestUrl = NewsUrlInfo.BASE_URL
        + NewsUrlInfo.HEADLINES
        + replace(NewsQueryParams.COUNTRY, 'us')
        + replace(NewsQueryParams.PAGE_SIZE, '100');
  
      return this.httpClient.get<HeadlineResponse>(requestUrl).pipe(
        map((response: HeadlineResponse) => response.articles.filter((article) => article.title !== '[Removed]'))
      );
    }
  }