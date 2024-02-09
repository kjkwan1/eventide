import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/store/state/app.state';
import { MediaStackArticle } from '../../model/news-model';
import { isArticlesLoading, selectAllArticles, selectHeadlineArticle } from 'src/app/store/selector/news.selector';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit {
  public isArticlesLoading$!: Observable<boolean>;
  public articles$!: Observable<MediaStackArticle[]>;
  public headline$!: Observable<MediaStackArticle | null>;
  public loadedArticleLength: number = 25;

  constructor(private store: Store<AppState>) {}

  public ngOnInit(): void {
    this.isArticlesLoading$ = this.store.pipe(select(isArticlesLoading));
    this.articles$ = this.store.pipe(select(selectAllArticles));
    this.headline$ = this.store.pipe(select(selectHeadlineArticle));
  }
}
