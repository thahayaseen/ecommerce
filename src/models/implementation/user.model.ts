import mongoose, { Document, Schema ,Types} from "mongoose";
import { IUser } from "shared/types";



const userSchema = new Schema<IUser>({
 
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

export const userModel = mongoose.model<IUser>("User", userSchema);
