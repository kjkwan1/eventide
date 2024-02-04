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
        return this.baseDatabaseService.update(this.storeName, new Date(), category);
    }

    public async getLastUpdated(category: string): Promise<IMetadataDatabase> {
        return this.baseDatabaseService.get<IMetadataDatabase>(this.storeName, category);
    }
}