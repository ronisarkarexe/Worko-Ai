import { Request, Response } from "express";
import { UserDtoModel } from "../dto_models/user.dto.model";
import sendResponse from "../utils/response";
import httpStatus from "http-status";
import { UserService } from "../services/user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const body: UserDtoModel = req.body;
    const result = await UserService.createUser(body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to created user!",
    });
  }
};

export const UserController = {
  createUser,
};
