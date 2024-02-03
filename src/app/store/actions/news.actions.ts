import { createAction, props } from "@ngrx/store";
import { NewsBaseCategories } from "src/app/features/news/enum/news";
import { MediaStackArticle } from "src/app/features/news/model/news-model";

export const loadArticles = createAction('[News] Articles Load');
export const loadArticlesSuccess = createAction('[News] Articles Load Success', props<{ articles: MediaStackArticle[] }>());
export const loadArticlesFailure = createAction('[News] Articles Load Failure', props<{ error: any }>());

export const loadArticlesByCategory = createAction('[News] Articles By Category Load', props<{ category: NewsBaseCategories }>());
export const loadArticlesByCategorySuccess = createAction('[News] Articles By Category Success', props<{ articles: MediaStackArticle[] }>());
export const loadArticlesByCategoryFailure = createAction('[News] Articles By Category Failure', props<{ error: any }>());

export const updateArticlesInView = createAction('[News] Update articles in view', props<{ category: NewsBaseCategories }>());
export const updateArticlesInViewSuccess = createAction('[News] Update articles in view success', props<{ articles: MediaStackArticle[] }>());
export const updateArticlesInViewFailure = createAction('[News] Update articles in view success', props<{ error: any }>());