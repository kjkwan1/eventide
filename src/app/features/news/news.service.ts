import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { NewsBaseCategories } from './enum/news';
import { updateArticlesInView } from 'src/app/store/actions/news.actions';

@Injectable()
export class NewsService {
  constructor(
    private store: Store<AppState>,
  ) {}

  public selectCategory(category: NewsBaseCategories) {
      this.store.dispatch(updateArticlesInView({ category }));
  }
}
