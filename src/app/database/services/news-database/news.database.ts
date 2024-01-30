import { Injectable } from "@angular/core";
import { BaseDatabaseService } from "../base-database/base-database.service";
import { Article } from "src/app/features/news/model/news-model";
import { Observable, Subject, map, of, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class NewsDatabase extends BaseDatabaseService<Article> {
    constructor() {
        super('news');
    }

    private articlesSubject$: Subject<void> = new Subject<void>();

    public updateArticlesInDb(articles: Article[]): Observable<Article[]> {
        return of(this.addMany(articles)).pipe(
            tap(() => {
                this.articlesSubject$.next();
            }),
            map(() => articles)
        )
    }

    get articleUpdate$() {
        return this.articlesSubject$.asObservable();
    }
}