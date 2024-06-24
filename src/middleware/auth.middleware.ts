import { NextFunction, Request, Response } from "express";
import { JwtHalers } from "../utils/jwt.helper";
import config from "../config";
import { Secret } from "jsonwebtoken";
import { User } from "../models/user.model";

const auth = () => async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (process.env.NODE_ENV === "test") {
      return next();
    }
    const accessToken = req.headers.cookie;
    let token = accessToken?.split("=")[1];

    if (!token) {
      throw new Error("You are not authorized to access");
    }

    const verifiedUser = await JwtHalers.verifyToken(
      token as string,
      config.jwt_secret as Secret
    );

    const { userEmail } = verifiedUser;
    const isExistUser = await User.findOne({ email: userEmail });
    if (isExistUser?.email !== userEmail) {
      throw new Error("Forbidden");
    }

    next();
  } catch (err) {
    next(err);
  }
};

export default auth;
