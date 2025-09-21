// Type for login form values
export type LoginValues = { email: string; password: string };

// Type for login API response
export type LoginResponse = { message: "success" | string; token?: string };

export type ForgetPassResponse = { message: "success"; info: string };

export type ForgetPassValues = { email: string | null };

export type verifyCodeResponse = { status: string };

export type verifyCodeValues = { resetCode: string };

export type newPassResponse = { message: string; token: string };

export type newPassValues = { email: string; newPassword: string };

declare type User = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo: string;
  _id: string;
  createdAt: string;
};

declare type RegisterSuccessResponse = {
  message: "success";
  user: User;
  token: string;
};
