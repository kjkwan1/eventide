import { createAction, props } from "@ngrx/store";
import { NewsBaseCategories } from "src/app/features/news/enum/news";
import { MediaStackArticle } from "src/app/features/news/model/news-model";

export const updateArticlesInView = createAction('[News] Update articles in view', props<{ category: NewsBaseCategories }>());
export const updateArticlesInViewSuccess = createAction('[News] Update articles in view success', props<{ articles: MediaStackArticle[], headlineArticle?: MediaStackArticle }>());
export const updateArticlesInViewFailure = createAction('[News] Update articles in view success', props<{ error: any }>());