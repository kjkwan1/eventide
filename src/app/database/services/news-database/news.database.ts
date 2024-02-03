import { Injectable } from "@angular/core";
import { BaseDatabaseService } from "../base-database/base-database.service";
import { MediaStackArticle } from "src/app/features/news/model/news-model";
import { NewsBaseCategories } from "src/app/features/news/enum/news";
import { IDBPDatabase } from "idb";
import { Database } from "../../model/base-database";

@Injectable({
    providedIn: 'root'
})
export class NewsDatabase extends BaseDatabaseService<MediaStackArticle> {
    constructor() {
        super('news');
    }

    protected override upgradeDb(db: IDBPDatabase<Database>, oldVersion?: number, newVersion?: IDBTransaction): void {
      const storeName = this.storeName;
      if (!db.objectStoreNames.contains(storeName)) {
        const store = db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        store.createIndex('categoryIndex', 'category', { unique: false });
      }
    }
    
    public async addArticle(article: Omit<MediaStackArticle, 'id'>): Promise<IDBValidKey> {
      const id = await this.add(article);
      return id;
    }
  
    public async getByCategory(category: NewsBaseCategories): Promise<MediaStackArticle[]> {
      const transaction = this.db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const index = store.index('categoryIndex');
      const articles: MediaStackArticle[] = [];
      let cursor = await index.openCursor(IDBKeyRange.only(category));
  
      while (cursor) {
        articles.push(cursor.value);
        cursor = await cursor.continue();
      }
  
      return articles;
    }
}