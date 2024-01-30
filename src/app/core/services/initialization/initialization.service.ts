import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { loadArticles } from 'src/app/store/actions/news.actions';
import { isArticlesLoading } from 'src/app/store/selector/news.selector';
import { BehaviorSubject, Observable, filter, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitializationService {
  private isInitializedSubject = new BehaviorSubject<boolean>(false);

  constructor(private store: Store<AppState>) { }

  public init() {
    this.store.dispatch(loadArticles());
    this.store.pipe(
      select(isArticlesLoading),
      filter((isLoading) => !isLoading),
      take(1)
    ).subscribe(() => {
      this.isInitializedSubject.next(true);
    })
  }

  get isInitialized$(): Observable<boolean> {
    return this.isInitializedSubject.asObservable();
  }
}
