import cors from "cors";
import express, { Application, Request, Response } from "express";
import httpStatus from "http-status";
import { Routers } from "./module_router/module.router";
import { BaseResponse } from "./dto_models/response.dto.model";

const app: Application = express();

// middleware
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", Routers);


// base response for testing
app.get("/", (req: Request, res: Response) => {
  const response: BaseResponse = {
    status: httpStatus.OK,
    message: "Hello world!",
  };
  res.status(response.status).json(response);
});

export default app;
