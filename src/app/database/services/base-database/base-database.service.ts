import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import { Database } from '../../model/base-database';
import { DATABASE_STORES } from '../../enum/database-stores';
import { DATABASE_INDEX } from '../../enum/database-index';
import { NewsBaseCategories } from 'src/app/features/news/enum/news';

@Injectable({
  providedIn: 'root'
})
export class BaseDatabaseService {
  private db!: IDBPDatabase<Database>;
  private version: number = 26;
  private dbName: string = 'eventide';

  constructor() {}

  public async initDb(): Promise<void> {
    this.db = await openDB<Database>(this.dbName, this.version, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(DATABASE_STORES.METADATA)) {
          const metadataStore = db.createObjectStore(DATABASE_STORES.METADATA, { keyPath: 'category'});
          metadataStore.createIndex(DATABASE_INDEX.BY_CATEGORY, 'category', { unique: true });
        }

        if (!db.objectStoreNames.contains(DATABASE_STORES.NEWS)) {
          const store = db.createObjectStore(DATABASE_STORES.NEWS, { keyPath: 'id', autoIncrement: true });
          store.createIndex(DATABASE_INDEX.BY_CATEGORY, 'category', { unique: false });
        }
      }
    });
  }

  public add<T>(storeName: string, record: T): Promise<IDBValidKey> {
    return this.db.add(storeName, record);
  }

  public async addMany<T>(storeName: string, records: T[]): Promise<IDBValidKey[]> {
    const keys: IDBValidKey[] = [];
    const tx = this.db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);

    for (let record of records) {
      const key = await store.add(record);
      keys.push(key);
    }

    await tx.done;
    return keys;
  }

  public update<T>(storeName: string, record: T) {
    return this.db.put(storeName, record);
  }

  public get<T>(storeName: string, key: IDBValidKey): Promise<T> {
    return this.db.get(storeName, key);
  }

  public getAll<T>(storeName: string): Promise<T[]> {
    return this.db.getAll(storeName);
  }

  public getFromIndex<T>(storeName: string, indexName: string, key: IDBValidKey): Promise<T> {
    return this.db.getFromIndex(storeName, indexName, key);
  }

  public getAllFromIndex<T>(storeName: string, indexName: string, category: NewsBaseCategories): Promise<T[]> {
    return this.db.getAllFromIndex(storeName, indexName, category);
  }

  public delete(storeName: string, key: IDBValidKey) {
    return this.db.delete(storeName, key);
  }

  get dbInstance() {
    return this.db;
  }
}
