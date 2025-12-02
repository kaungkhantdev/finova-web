export interface PaginationMeta {
    page_per_items: number;
    total_items: number;
    current_page: number;
    next_page: number;
    prev_page: number;
    last_page: boolean;
    first_page: boolean;
    has_next: boolean;
    has_prev: boolean;
    total_pages: number;
}

export interface ApiPaginationQueryParams {
  page: number;
  size: number;
}