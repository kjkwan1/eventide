import { Injectable } from '@angular/core';
import { IDBPDatabase, openDB } from 'idb';
import { Database } from '../../model/base-database';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseDatabaseService<T> {
  protected db!: IDBPDatabase<Database>;
  protected version: number = 1;

  private dbName: string = 'eventide';

  protected constructor(protected storeName: string) {
    this.storeName = storeName;
    this.initDb();
  }

  private async initDb(): Promise<void> {
    const storeName = this.storeName;
    this.db = await openDB<Database>(this.dbName, this.version, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
        }
      }
    });
  }

  public add(record: T): Promise<IDBValidKey> {
    return this.db.add(this.storeName, record);
  }

  public getAll(): Promise<T[]> {
    return this.db.getAll(this.storeName);
  }
}