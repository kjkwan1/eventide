import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import { Database } from '../../model/base-database';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseDatabaseService<T> {
  protected db!: IDBPDatabase<Database>;
  protected version: number = 13;

  private dbName: string = 'eventide';

  protected constructor(protected storeName: string) {
    this.storeName = storeName;
  }

  protected upgradeDb(db: IDBPDatabase<Database>, oldVersion?: number, newVersion?: IDBTransaction): void {
    const storeName = this.storeName;
    if (!db.objectStoreNames.contains(storeName)) {
      db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    }
  }

  public async initDb(): Promise<void> {
    const upgradeDb = this.upgradeDb.bind(this)
    this.db = await openDB<Database>(this.dbName, this.version, {
      upgrade(db) {
        upgradeDb(db)
      }
    });
  }


  public add<T>(record: T): Promise<IDBValidKey> {
    return this.db.add(this.storeName, record);
  }

  public async addMany(records: T[]): Promise<IDBValidKey[]> {
    const keys: IDBValidKey[] = [];
    const tx = this.db.transaction(this.storeName, 'readwrite');
    const store = tx.objectStore(this.storeName);

    for (let record of records) {
      const key = await store.add(record);
      keys.push(key);
    }

    await tx.done;
    return keys;
  }


  public getAll(): Promise<T[]> {
    return this.db.getAll(this.storeName);
  }
}
