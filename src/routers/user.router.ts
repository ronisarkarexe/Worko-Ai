import express from "express";
import { UserController } from "../controllers/user.controller";
import { Validator } from "../validators/user.validator";
import { validateRequest } from "../middleware/validation.middleware";

const router = express.Router();

router.get("/list_user", UserController.getUsers);

router.get("/:userId", UserController.getUser);

router.post(
  "/create",
  validateRequest(Validator.createUser),
  UserController.createUser
);

router.put(
  "/update_user/:userId",
  validateRequest(Validator.createUser),
  UserController.updateUserPut
);

router.patch("/update_user/:userId", UserController.updateUserPatch);

export const UserRouter = router;
