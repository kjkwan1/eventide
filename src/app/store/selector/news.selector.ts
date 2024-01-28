import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectAll } from '../reducers/news.reducer';

export const selectArticleState = (state: AppState) => state.articles;

export const selectAllArticles = createSelector(
  selectArticleState,
  selectAll
);