import { Injectable } from "@angular/core";
import { BaseDatabaseService } from "../base-database/base-database.service";
import { DATABASE_STORES } from "../../enum/database-stores";
import { IMetadataDatabase } from "../../model/metadata-database";

@Injectable({
    providedIn: 'root'
})
export class MetadataDatabase {
    private storeName = DATABASE_STORES.METADATA;
    constructor(private baseDatabaseService: BaseDatabaseService) {
    }

    public async updateLastUpdated(category: string): Promise<IDBValidKey> {
        return this.baseDatabaseService.update(
            this.storeName,
            {
                category,
                lastUpdated: new Date().toString() // lastUpdated tracks when the data was refreshed, not when it was last written to.
            }, 
        );
    }

    public async getLastUpdated(category: string): Promise<IMetadataDatabase> {
        return this.baseDatabaseService.get<IMetadataDatabase>(this.storeName, category);
    }

    public async updateHeadlineArticleId(category: string, articleId: IDBValidKey): Promise<IDBValidKey> {
        return this.baseDatabaseService.update(
            this.storeName,
            {
                category,
                headlineArticleId: articleId,
            }
        )
    }

    public async getHeadlineArticleId(category: string): Promise<IDBValidKey | null> {
        return (await this.baseDatabaseService.get<IMetadataDatabase>(this.storeName, category)).headlineArticleId;
    }
}