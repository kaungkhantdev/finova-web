import { apiClient } from "@/services";
import type { ApiResponse } from "@/types";
import { API_ENDPOINTS } from "@/utils/constants";

export const authApiService = {
  login: async (email: string, password: string): Promise<ApiResponse<string>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGIN, {
        email,
        password,
      });
    return response.data;
  },
  logout: async (): Promise<ApiResponse<string>> => {
    const response = await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  },
};