export interface Config {
    sbCleanBlogNodeURL: string;
    demoEnabled: boolean;
}

export interface PaginatedResponse<T> {
    content: T[];
    totalPages: number;
    totalElements: number;
    last: false;
    first: false;
    size: number;
    number: number;
    sort: SortResponse;
    numberOfElements: number;
    empty: boolean;
}

export interface SortResponse {
    unsorted: boolean,
    sorted: boolean,
    empty: false
}
