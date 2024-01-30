import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Article } from 'src/app/features/news/model/news-model';

export interface ArticleState extends EntityState<Article> {
  isLoading: boolean;
  error: string | null;
}

export const adapter: EntityAdapter<Article> = createEntityAdapter<Article>({
  selectId: (article: Article) => article.url
});

export const initialArticleState: ArticleState = adapter.getInitialState({
  isLoading: true,
  error: null,
});