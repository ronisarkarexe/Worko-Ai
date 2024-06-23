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

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to retrieved users!",
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await UserService.getUser(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      message: "Fail to retrieved user!",
    });
  }
};

export const UserController = {
  createUser,
  getUsers,
  getUser,
};
