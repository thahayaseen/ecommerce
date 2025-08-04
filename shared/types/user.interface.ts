import { Types } from "mongoose";

export interface IUser {

  username: string;
  role?: "admin" | "user";
  email: string;
  password?: string;
}
