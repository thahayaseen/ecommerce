import mongoose, { Document, Schema ,Types} from "mongoose";
import { IUser } from "shared/types";
import { IUserModel } from "../interface/IuserDocumet";


const userSchema = new Schema<IUserModel>({
 
  username: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  email: {
    type: String,
    required: true, 
    unique: true,
  },
  password: {
    type: String,
  },
});

export const userModel = mongoose.model<IUserModel>("User", userSchema);
