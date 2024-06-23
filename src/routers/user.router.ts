import express from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router();

router.post("/create", UserController.createUser);

export const UserRouter = router;
