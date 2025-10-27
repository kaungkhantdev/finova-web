export interface PaginationMeta {
    page_per_items: number;
    last_page: number;
    total_items: number;
    current_page: number;
    next_page: number;
    prev_page: number;
}

export interface ApiResponse<T> extends ApiResponseMessage {
    data: T[];
    metadata: PaginationMeta;
}
export interface ApiResponseMessage {
    error: boolean;
    message: string;
    status: string;
    success: boolean;
    timestamp: string;
    warning: boolean;
}

export interface ApiResponseNotPaginate<T> extends ApiResponseMessage {
    data: T;
}

export interface ApiQueryParams {
  page: number;
  size: number;
}
