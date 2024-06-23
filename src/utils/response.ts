import { Response } from "express";

export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T | null;
}

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
