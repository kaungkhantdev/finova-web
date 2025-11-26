export interface PaginationMeta {
    page_per_items: number;
    last_page: number;
    total_items: number;
    current_page: number;
    next_page: number;
    prev_page: number;
}

export interface ApiPaginationQueryParams {
  page: number;
  size: number;
}