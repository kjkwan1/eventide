export interface MockMediaStackResponse {
    payload : MediaStackResponse;
}

export interface MediaStackResponse {
    pagination: {
        limit: number;
        offset: number;
        count: number;
        total: number;
    };
    data: MediaStackArticle[];
}

export interface MediaStackArticle {
    id: IDBValidKey;
    author: string;
    title: string;
    description: string;
    url: string;
    source: string;
    image: string;
    category: string;
    language: string;
    country: string;
    published_at: string;
    imageData: string | Blob;
}

export interface MediaStackArticleWithHeadline {
    articles: MediaStackArticle[];
    headline: MediaStackArticle | null;
}