import cors from "cors";
import express, { Application, Request, Response } from "express";
import httpStatus from "http-status";

const app: Application = express();

// middleware
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  const response = {
    status: httpStatus.OK,
    message: "Hello world!",
  };
  res.status(response.status).json(response);
});

export default app;
