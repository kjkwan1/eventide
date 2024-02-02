import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { NewsDataService } from "src/app/core/services/news-data.service";
import { loadArticles, loadArticlesByCategory, loadArticlesByCategorySuccess, loadArticlesSuccess } from "../actions/news.actions";
import { NewsDatabase } from "src/app/database/services/news-database/news.database";
import { Article } from "src/app/features/news/model/news-model";
import { NewsBaseCategories } from "src/app/features/news/enum/news";

@Injectable()
export class NewsEffects {
  loadArticles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticles),
      switchMap(() => this.newsDataService.fetchAllArticles()),
      switchMap((articles) => this.newsDatabase.updateArticlesInDb(articles)),
      map((articles: Article[]) => loadArticlesSuccess({ articles }))
    )
  )

  loadArticlesByCategory$ = createEffect(() => 
    this.actions$.pipe(
      ofType(loadArticlesByCategory),
      switchMap((action) => this.newsDataService.fetchArticlesByCategory(action.category)),
      switchMap((articles) => this.newsDatabase.updateArticlesInDb(articles)),
      map((articles: Article[]) => loadArticlesByCategorySuccess({ articles })),
    )
  )

  constructor(
    private actions$: Actions,
    private newsDatabase: NewsDatabase,
    private newsDataService: NewsDataService
  ) {}
}