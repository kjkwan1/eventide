import { Injectable } from "@angular/core";
import { MediaStackArticle } from "src/app/features/news/model/news-model";
import { NewsBaseCategories } from "src/app/features/news/enum/news";
import { DATABASE_STORES } from "../../enum/database-stores";
import { BaseDatabaseService } from "../base-database/base-database.service";
import { DATABASE_INDEX } from "../../enum/database-index";

@Injectable({
    providedIn: 'root'
})
export class NewsDatabase{
    private storeName = DATABASE_STORES.NEWS;
    constructor(private baseDatabaseService: BaseDatabaseService) {}
  
    public addArticle(article: Omit<MediaStackArticle, 'id'>): Promise<IDBValidKey> {
      return this.baseDatabaseService.add(this.storeName, article);
    }

    public addArticles(articles: MediaStackArticle[]) {
      return this.baseDatabaseService.addMany<MediaStackArticle>(this.storeName, articles);
    }
  
    public getByCategory(category: NewsBaseCategories): Promise<MediaStackArticle[]> {
      return this.baseDatabaseService.getAllFromIndex(this.storeName, DATABASE_INDEX.BY_CATEGORY);
    }
}