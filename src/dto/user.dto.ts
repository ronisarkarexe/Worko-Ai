import { Model } from "mongoose";

export interface IUser {
  email: string;
  name: string;
  age: number;
  city: string;
  zipCode: number;
}

export type UserModel = Model<IUser, object>;

export class UserDto {
  id: string;
  email: string;
  name: string;
  age: number;
  city: string;
  zipCode: string;

  constructor({ id, email, name, age, city, zipCode }: any) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.age = age;
    this.city = city;
    this.zipCode = zipCode;
  }
}
