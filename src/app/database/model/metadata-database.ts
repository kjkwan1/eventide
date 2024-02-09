import { NewsBaseCategories } from "src/app/features/news/enum/news";

export interface IMetadataDatabase {
    category: NewsBaseCategories;
    lastUpdated: Date;
    headlineArticleId: IDBValidKey | null;
}