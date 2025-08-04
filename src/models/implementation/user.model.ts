import mongoose, { Document, Schema ,Types} from "mongoose";

import { IUserDocument } from "../interface/IuserDocumet";



const userSchema = new Schema<IUserDocument>({
 
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

export const userModel = mongoose.model<IUserDocument>("User", userSchema);
