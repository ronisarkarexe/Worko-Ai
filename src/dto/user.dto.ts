import { Model } from "mongoose";

export interface IUser {
  email: string;
  name: string;
  age: number;
  city: string;
  zipCode: number;
  isDelete: boolean;
}

export type UserModel = Model<IUser, object>;

export class UserDto {
  id: string;
  email: string;
  name: string;
  age: number;
  city: string;
  zipCode: string;
  isDelete: boolean;

  constructor({ id, email, name, age, city, zipCode, isDelete }: any) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.age = age;
    this.city = city;
    this.zipCode = zipCode;
    this.isDelete = isDelete;
  }
}
