import { UserDtoModel } from "../dto_models/user.dto.model";
import { User } from "../models/user.model";

const createUser = async (payload: UserDtoModel): Promise<UserDtoModel> => {
  const result = await User.create(payload);
  return result;
};

const getUsers = async (): Promise<UserDtoModel[]> => {
  const result = await User.find({});
  return result;
};

const getUser = async (payload: string): Promise<UserDtoModel | null> => {
  const result = await User.findOne({ _id: payload });
  return result;
};

const updateUserPut = async (userId: string, payload: UserDtoModel) => {
  const result = await User.findOneAndUpdate({ _id: userId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const UserService = {
  createUser,
  getUsers,
  getUser,
  updateUserPut,
};
