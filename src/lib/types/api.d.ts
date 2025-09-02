declare type SuccessfullResponse<T> = {
  message: string;
} & T;

declare type ErrorResponse = {
  error: string;
};

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
