import { createReducer, on } from "@ngrx/store";
import { adapter, initialArticleState } from "../state/articles.state";
import { loadArticles, loadArticlesFailure, loadArticlesSuccess } from "../actions/news.actions";

export const articleReducer = createReducer(
  initialArticleState,
  on(loadArticles, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(loadArticlesSuccess, (state, { articles }) => 
    adapter.setAll(articles, {
      ...state,
      isLoading: false
    })
  ),
  on(loadArticlesFailure, (state, { error }) => ({
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