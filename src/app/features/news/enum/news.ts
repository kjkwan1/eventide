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
    BUSINESS = 'business',
    ENTERTAINMENT = 'entertainment',
    HEALTH = 'health',
    SCIENCE = 'science',
    SPORTS = 'sports',
    TECH = 'technology',
}