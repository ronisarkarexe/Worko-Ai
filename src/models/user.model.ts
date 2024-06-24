import { Schema, model } from "mongoose";
import { IUser, UserModel } from "../dto/user.dto";
import bcrypt from 'bcrypt';
import config from "../config";

export const UserSchema: Schema<IUser> = new Schema<IUser, UserModel>(
  {
    email: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true, maxlength: 100, minlength: 5 },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    zipCode: { type: Number, required: true },
    isDelete: { type: Boolean, default: false },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

export const User = model<IUser, UserModel>("User", UserSchema);
