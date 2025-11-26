import { type PaginationMeta } from './apiPagination.types';
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
