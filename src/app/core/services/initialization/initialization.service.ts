import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { isArticlesLoading } from 'src/app/store/selector/news.selector';
import { BehaviorSubject, Observable, filter, take } from 'rxjs';
import { NewsInitializationService } from './news-initialization.service';

@Injectable({
  providedIn: 'root'
})
export class InitializationService {
  private isInitializedSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private store: Store<AppState>,
    private newsInitializationService: NewsInitializationService,
  ) { }

  public async init() {
    await this.newsInitializationService.init();
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
