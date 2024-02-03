export enum NewsUrlInfo {
    BASE_URL = 'http://api.mediastack.com/v1/news',
    HEADLINES = 'top-headlines?',
}

export enum NewsQueryParams {
    COUNTRIES = '&countries={{country}}',
    KEYWORDS = '&keywords={{query}}',
    ACCESS_KEY = '?access_key={{key}}'
}

export enum NewsBaseCategories {
    GENERAL = 'general',
    SPORTS = 'sports',
    TECH = 'technology',
    ECONOMY = 'economy',
    POLITICS = 'politics',
    SCIENCE = 'science',
    GEOLOGY = 'geology',
}