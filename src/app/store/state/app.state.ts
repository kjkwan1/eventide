import { NewsBaseCategories } from "src/app/features/news/enum/news";
import { ArticleState, initialArticleState } from "./articles.state";

export interface AppState {
    articles: ArticleState,
    categoryUpdateData: Partial<Record<NewsBaseCategories, string>>,
    db: {
        isDatabaseInitialized: boolean
    }
}

export const initialState: AppState = {
    articles: initialArticleState,
    categoryUpdateData: {},
    db: {
        isDatabaseInitialized: false,
    }
}