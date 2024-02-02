import { createAction, props } from "@ngrx/store";
import { NewsBaseCategories } from "src/app/features/news/enum/news";
import { Article } from "src/app/features/news/model/news-model";

export const loadArticles = createAction('[News] Articles Load');
export const loadArticlesSuccess = createAction('[News] Articles Load Success', props<{ articles: Article[] }>());
export const loadArticlesFailure = createAction('[News] Articles Load Failure', props<{ error: any }>());

export const loadArticlesByCategory = createAction('[News] Articles By Category Load', props<{ category: NewsBaseCategories }>());
export const loadArticlesByCategorySuccess = createAction('[News] Articles By Category Success', props<{ articles: Article[] }>());
export const loadArticlesByCategoryFailure = createAction('[News] Articles By Category Failure', props<{ error: any }>());