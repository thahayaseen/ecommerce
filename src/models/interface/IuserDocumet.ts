import { Document } from "mongoose";
import { IUser } from "shared/types";

export interface IUserDocument extends Document, Omit<IUser, "_id"> {}
