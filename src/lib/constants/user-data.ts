export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: "male" | "female";
  age: number;
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
  photo: string;
  createdAt: string;
  passwordResetCode: string;
  passwordResetExpires: string;
  resetCodeVerified: boolean;
};

export type UserDataResponse = {
  message: string;
  user: User;
};
