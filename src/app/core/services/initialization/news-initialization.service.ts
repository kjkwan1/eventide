import { Injectable } from '@angular/core';
import { NewsDataService } from '../news-data.service';
import { NewsDatabase } from 'src/app/database/services/news-database/news.database';
import { Initializable } from '../initializable';
import { firstValueFrom } from 'rxjs';
import { NewsBaseCategories } from 'src/app/features/news/enum/news';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { updateArticlesInView } from 'src/app/store/actions/news.actions';
import { MetadataDatabase } from 'src/app/database/services/metadata-database/metadata-database';

@Injectable({
  providedIn: 'root'
})
export class NewsInitializationService implements Initializable {
  constructor(
    private newsDataService: NewsDataService,
    private metadataDatabase: MetadataDatabase,
    private newsDatabase: NewsDatabase,
    private store: Store<AppState>,
  ) { }

  public async init(): Promise<void> {
    await this.initializeHeadlineArticles();
    // await this.initializeCategoryArticles();
  }

  public async initializeHeadlineArticles(): Promise<void> {
    try {
      const headlines = await firstValueFrom(this.newsDataService.fetchAllArticles());
      if (!headlines || !headlines.length) {
        return;
      }
      await this.newsDatabase.addArticles(headlines);
      this.store.dispatch(updateArticlesInView({
        category: NewsBaseCategories.GENERAL
      }));
    } catch(e) {
      console.error(e);
      return;
    }
  }

  public async initializeCategoryArticles(): Promise<void> {
    for (let category of Object.values(NewsBaseCategories)) {
      try {
        const articles = (await firstValueFrom(this.newsDataService.fetchArticlesByCategory(category)));
        if (!articles || !articles.length) {
          return;
        }
        await this.newsDatabase.addArticles(articles);
      } catch(e) {
        console.error(e);
      }
    }
  }
}
