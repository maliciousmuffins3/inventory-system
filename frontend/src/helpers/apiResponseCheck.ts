import type { ApiResponse } from "@/types/API";

export function apiResponseCheck<T>(response: ApiResponse<T>): T {
  if (response.success) return response.data;
  throw new Error(response.error?.message || "Unknown API error");
}
