import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { isArticlesLoading } from 'src/app/store/selector/news.selector';
import { BehaviorSubject, Observable, filter, take } from 'rxjs';
import { NewsInitializationService } from './news-initialization.service';
import { NewsDatabase } from 'src/app/database/services/news-database/news.database';
import { NewsBaseCategories } from 'src/app/features/news/enum/news';

@Injectable({
  providedIn: 'root'
})
export class InitializationService {
  private isInitializedSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private store: Store<AppState>,
    private newsDatabase: NewsDatabase,
    private newsInitializationService: NewsInitializationService,
  ) { }

  public async init() {
    await this.newsInitializationService.init();
    const articles = await this.newsDatabase.getByCategory(NewsBaseCategories.POLITICS);

    this.store.pipe(
      select(isArticlesLoading),
      filter((isLoading) => !isLoading),
      take(1),
    ).subscribe(() => {
      this.isInitializedSubject.next(true);
    })
  }

  get isInitialized$(): Observable<boolean> {
    return this.isInitializedSubject.asObservable();
  }
}
