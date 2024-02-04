import { MediaStackArticle } from "src/app/features/news/model/news-model";
import { IMetadataDatabase } from "./metadata-database";

export interface Database {
    articles: MediaStackArticle[];
    metadata: IMetadataDatabase[];
}