import express from "express";
import { UserController } from "../controllers/user.controller";
import { Validator } from "../validators/user.validator";
import { validateRequest } from "../middleware/validation.middleware";

const router = express.Router();

router.post(
  "/create",
  validateRequest(Validator.createUser),
  UserController.createUser
);

export const UserRouter = router;
