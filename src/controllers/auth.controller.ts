import { Request, Response } from "express";
import { AuthDtoModel } from "../dto_models/auth.dto.model";
import { AuthService } from "../services/auth.service";
import sendResponse from "../utils/response";
import httpStatus from "http-status";
import config from "../config";

const login = async (req: Request, res: Response) => {
  try {
    const body: AuthDtoModel = req.body;
    const result = await AuthService.login(body);
    const { accessToken } = result;

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: config.env === "production",
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User login successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to login user!",
    });
  }
};

export const AuthController = {
  login,
};
