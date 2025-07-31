import { IUser } from "shared/types";

export interface IUserModel extends Document, Omit<IUser, "_id"> {}
