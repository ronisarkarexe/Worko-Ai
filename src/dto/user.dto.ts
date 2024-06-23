import { Model } from "mongoose";

export interface IUser {
  email: string;
  name: string;
  age: number;
  city: string;
  zipCode: number;
}

export type UserModel = Model<IUser, object>;
