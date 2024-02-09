import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { concatMap, map, of, switchMap, tap } from "rxjs";
import { updateArticlesInView, updateArticlesInViewSuccess } from "../actions/news.actions";
import { NewsDatabase } from "src/app/database/services/news-database/news.database";
import { MediaStackArticle, MediaStackArticleWithHeadline } from "src/app/features/news/model/news-model";
import { NewsBaseCategories } from "src/app/features/news/enum/news";
import { NewsDataService } from "src/app/core/services/news-data.service";
import { MetadataDatabase } from "src/app/database/services/metadata-database/metadata-database";

@Injectable()
export class NewsEffects {
  updateArticlesInView$ = createEffect(() => {
    let cat: NewsBaseCategories;
    return this.actions$.pipe(
      ofType(updateArticlesInView),
      tap((action: { category: NewsBaseCategories }) => {
        cat = action.category;
      }),
      switchMap((action: { category: NewsBaseCategories }) =>  this.newsDatabase.getByCategory(action.category)),
      switchMap((articles: MediaStackArticle[]) => this.newsDataService.findHeadlineArticle(articles)),
      switchMap((data: MediaStackArticleWithHeadline) => {
        const { headline } = data;
        if (!headline || !headline.id) {
          return of(data);
        }
        const articles = data.articles.filter((article: MediaStackArticle) => article.id !== headline.id);
        return this.metadataDatabase.updateHeadlineArticleId(cat, headline.id).then(() => {
          return {
            articles,
            headline
          }
        })
      }),
      map((data: MediaStackArticleWithHeadline) => {
        if (!data.headline) {
          return updateArticlesInViewSuccess({ articles: data.articles });
        }
        return updateArticlesInViewSuccess({ articles: data.articles, headlineArticle: data.headline })
      }),
    )
  })

  constructor(
    private actions$: Actions,
    private newsDatabase: NewsDatabase,
    private newsDataService: NewsDataService,
    private metadataDatabase: MetadataDatabase,
  ) {}
}