import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Article } from "src/app/features/news/model/news-model";
import { ArticleState } from "src/app/store/state/articles.state";

@Injectable({
    providedIn: 'root'
  })
  export class NewsDataService {
    constructor(private httpClient: HttpClient, private store: Store<{ articles: ArticleState }>) {}
  
    public fetchAllArticles(): Observable<Article[]> {
      return this.httpClient.get<Article[]>('api/articles');
    }  
  }