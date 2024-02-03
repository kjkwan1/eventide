import { createReducer, on } from "@ngrx/store";
import { adapter, initialArticleState } from "../state/articles.state";
import { updateArticlesInView, updateArticlesInViewFailure, updateArticlesInViewSuccess } from "../actions/news.actions";

export const articleReducer = createReducer(
  initialArticleState,
  on(updateArticlesInView, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(updateArticlesInViewSuccess, (state, { articles }) => ({
    ...adapter.setAll(articles, state),
    isLoading: false,
    error: null
  })),
  on(updateArticlesInViewFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error
  })),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();