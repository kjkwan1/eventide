import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from 'src/app/features/news/model/news-model';

export interface ArticleState extends EntityState<Article> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  // TODO: sort comparison
});

export const initialArticleState: ArticleState = adapter.getInitialState({
  isLoading: false,
  error: null,
});