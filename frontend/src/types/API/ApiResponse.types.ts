export type ApiResponse<T> = {
  success: boolean;
  code: number;
  message: string;
  data: T;
  error?: ErrorResponse;
};

export type ErrorResponse = {
  code: string;
  message: string;
};
