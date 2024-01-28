import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { NewsDataService } from "src/app/core/services/news-data.service";
import { loadArticles, loadArticlesFailure, loadArticlesSuccess } from "../actions/news.actions";
import { Action } from "@ngrx/store";

@Injectable()
export class ArticleEffects {
  loadArticles$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadArticles),
      mergeMap(() =>
        this.newsDataService.fetchAllArticles().pipe(
          map(articles => loadArticlesSuccess({ articles })),
          catchError(error => of(loadArticlesFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private newsDataService: NewsDataService
  ) {}
}