import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { NewsDataService } from "src/app/core/services/news-data.service";
import { loadArticles, loadArticlesByCategory, loadArticlesByCategorySuccess, loadArticlesSuccess, updateArticlesInView, updateArticlesInViewSuccess } from "../actions/news.actions";
import { NewsDatabase } from "src/app/database/services/news-database/news.database";
import { MediaStackArticle } from "src/app/features/news/model/news-model";
import { NewsBaseCategories } from "src/app/features/news/enum/news";

@Injectable()
export class NewsEffects {
  updateArticlesInView$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateArticlesInView),
      switchMap((action: { category: NewsBaseCategories }) => {
        return this.newsDatabase.getByCategory(action.category);
      }),
      map((articles: MediaStackArticle[]) => updateArticlesInViewSuccess({ articles }))
    )
  )

  constructor(
    private actions$: Actions,
    private newsDatabase: NewsDatabase,
  ) {}
}