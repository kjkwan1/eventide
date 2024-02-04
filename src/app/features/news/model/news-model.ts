// export interface HeadlineResponse {
//     status: string;
//     totalResults: number;
//     articles: Article[]
// }

// export interface Article {
//     id?: IDBValidKey;
//     source: {
//         id: string;
//         name: string;
//     };
//     author: string;
//     title: string;
//     description: string;
//     url: string;
//     urlToImage: string;
//     publishedAt: string;
//     content: string;
//     category?:string;
// }

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
    published_at: Date;
}