import { createAction, props } from "@ngrx/store";
import { Article } from "src/app/features/news/model/news-model";

export const loadArticles = createAction('[News] Articles Load');
export const loadArticlesSuccess = createAction('[News] Articles Load Success', props<{ articles: Article[] }>());
export const loadArticlesFailure = createAction('[News] Articles Load Failure', props<{ error: any }>());