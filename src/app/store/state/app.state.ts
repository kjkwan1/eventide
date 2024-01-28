import { ArticleState, initialArticleState } from "./articles.state";

export interface AppState {
    articles: ArticleState,
}

export const initialState: AppState = {
    articles: initialArticleState,
}