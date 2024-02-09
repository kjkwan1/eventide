import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, concatMap, defaultIfEmpty, filter, from, map, of, take } from "rxjs";
import { NewsBaseCategories, NewsQueryParams, NewsUrlInfo } from "src/app/features/news/enum/news";
import { MediaStackArticle, MediaStackArticleWithHeadline, MediaStackResponse, MockMediaStackResponse } from "src/app/features/news/model/news-model";
import { replace } from "src/app/shared/text-helpers";
import { ImageService } from "./image.service";

@Injectable({
    providedIn: 'root'
  })
  export class NewsDataService {
    constructor(
      private httpClient: HttpClient,
      private imageService: ImageService,
    ) {}
  
    public fetchAllArticles(): Observable<MediaStackArticle[]> {
      // const requestUrl = NewsUrlInfo.BASE_URL
      //   + NewsQueryParams.ACCESS_KEY
      //   + replace(NewsQueryParams.COUNTRIES, 'us');
  
      // return this.httpClient.get<MediaStackResponse>(requestUrl).pipe(
      //   // map((response: MediaStackResponse) => response.data),
      // );
      const requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/6BgV9ZqGQNgwdnqtw2WE';
      return this.httpClient.get<MockMediaStackResponse>(requestUrl).pipe(
          map((response: MockMediaStackResponse) => response.payload.data)
      );
    }

    public fetchArticlesByCategory(category: NewsBaseCategories): Observable<MediaStackArticle[]> {
      // const requestUrl = NewsUrlInfo.BASE_URL
      //   + NewsQueryParams.ACCESS_KEY
      //   + replace(NewsQueryParams.KEYWORDS, category);
      //   + replace(NewsQueryParams.COUNTRIES, 'us');
      let requestUrl: string;
      switch(category) {
        case NewsBaseCategories.BUSINESS:
          requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/2HkzYMUNhIbKstgI0dTH';
          break;
        case NewsBaseCategories.HEALTH:
          requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/5Ng9qTSJGgQPsKaKy7Jg';
          break;
        case NewsBaseCategories.SPORTS:
          requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/MUSvxj7soD185OC91Pjk';
          break;
        case NewsBaseCategories.ENTERTAINMENT:
          requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/aBdwv7FyvqQHOCHVV9qr';
          break;
        case NewsBaseCategories.TECH:
          requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/bWht48KNjv7X44wA93Lm';
          break;
        case NewsBaseCategories.SCIENCE:
          requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/j2dJCsa1pkT4TLg3jeJC';
          break;
        default:
          requestUrl = 'https://api.fakend.fyi/pVdtG8NnhIbkBbgeQa7g/6BgV9ZqGQNgwdnqtw2WE';
      }

      // return this.httpClient.get<MediaStackResponse>(requestUrl).pipe(
      //   map((response: MediaStackResponse) => response.data),
      //   map((articles: MediaStackArticle[]) => articles.map((article) => {
      //     return {
      //       ...article,
      //       category,
      //     }
      //   }))
      // );

      return this.httpClient.get<MockMediaStackResponse>(requestUrl).pipe(
        map((response: MockMediaStackResponse) => response.payload.data),
        map((articles: MediaStackArticle[]) => articles.map((article) => {
          return {
            ...article,
            category,
          }
        }))
      );
    }

    public findHeadlineArticle(articles: MediaStackArticle[]): Observable<MediaStackArticleWithHeadline> {
      return from(articles).pipe(
        concatMap((article) => this.imageService.validateHeadlineEligibility(article).pipe(
          catchError(err => of(null))
        )),
        filter((article) => !!article),
        take(1),
        defaultIfEmpty(null) // If no valid articles are found, emit null
      ).pipe(
        map((article: MediaStackArticle | null) => {
          return {
            articles,
            headline: article || null
          }
        })
      )
    }
  }