import { UserDtoModel } from "../dto_models/user.dto.model";
import { User } from "../models/user.model";

const createUser = async (payload: UserDtoModel): Promise<UserDtoModel> => {
  const result = await User.create(payload);
  return result;
};

export const UserService = {
  createUser,
};
