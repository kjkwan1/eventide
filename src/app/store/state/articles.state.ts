import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { MediaStackArticle } from 'src/app/features/news/model/news-model';

export interface ArticleState extends EntityState<MediaStackArticle> {
  isLoading: boolean;
  error: string | null;
  heroArticle: MediaStackArticle | null;
}

export const adapter: EntityAdapter<MediaStackArticle> = createEntityAdapter<MediaStackArticle>({
  selectId: (article: MediaStackArticle) => article.id.toString()
});

export const initialArticleState: ArticleState = adapter.getInitialState({
  isLoading: true,
  error: null,
  heroArticle: null,
});