import { Schema, model } from "mongoose";
import { IUser, UserModel } from "../dto_models/user.dto.model";

const UserSchema: Schema<IUser> = new Schema<IUser, UserModel>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true, maxlength: 100, minlength: 10 },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser, UserModel>("User", UserSchema);
