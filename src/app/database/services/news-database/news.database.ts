import { Injectable } from "@angular/core";
import { BaseDatabaseService } from "../base-database/base-database.service";
import { Article } from "src/app/features/news/model/news-model";

@Injectable({
    providedIn: 'root'
})
export class NewsDatabase extends BaseDatabaseService<Article> {
    constructor() {
        super('news');
    }
}