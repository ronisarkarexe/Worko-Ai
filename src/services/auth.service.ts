import { AuthDtoModel } from "../dto_models/auth.dto.model";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import { Secret } from "jsonwebtoken";
import { JwtHalers } from "../utils/jwt.helper";
import config from "../config";

const login = async (payload: AuthDtoModel) => {
  const { email, password } = payload;
  const isExistUser = await User.findOne({ email: email });
  if (!isExistUser) {
    throw new Error("User not found");
  }
  const match = await bcrypt.compare(password, isExistUser.password);
  if (!match) {
    throw new Error("Password is not valid");
  }
  const { email: userEmail } = isExistUser;
  const accessToken = JwtHalers.createToken(
    { userEmail },
    config.jwt_secret as Secret,
    config.jwt_expires_in as string
  );
  return {
    accessToken,
  };
};

export const AuthService = {
  login,
};
