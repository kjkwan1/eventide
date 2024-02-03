import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { NewsBaseCategories, NewsQueryParams, NewsUrlInfo } from "src/app/features/news/enum/news";
import { MediaStackArticle, MediaStackResponse, MockMediaStackResponse } from "src/app/features/news/model/news-model";
import { replace } from "src/app/shared/text-helpers";
import { ArticleState } from "src/app/store/state/articles.state";

@Injectable({
    providedIn: 'root'
  })
  export class NewsDataService {
    constructor(private httpClient: HttpClient, private store: Store<{ articles: ArticleState }>) {}
  
    public fetchAllArticles(): Observable<MediaStackArticle[]> {
      // const requestUrl = NewsUrlInfo.BASE_URL
      //   + NewsQueryParams.ACCESS_KEY
      //   + replace(NewsQueryParams.COUNTRIES, 'us');
  
      // return this.httpClient.get<MediaStackResponse>(requestUrl).pipe(
      //   // map((response: MediaStackResponse) => response.data),
      // );
      const requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/6BgV9ZqGQNgwdnqtw2WE';
      return this.httpClient.get<MockMediaStackResponse>(requestUrl).pipe(
          map((response: MockMediaStackResponse) => response.payload.data),
      );

    }

    public fetchArticlesByCategory(category: NewsBaseCategories): Observable<MediaStackArticle[]> {
      const requestUrl = NewsUrlInfo.BASE_URL
        + NewsQueryParams.ACCESS_KEY
        + replace(NewsQueryParams.KEYWORDS, category);

        return this.httpClient.get<MediaStackResponse>(requestUrl).pipe(
          map((response: MediaStackResponse) => response.data),
        );
    }
  }