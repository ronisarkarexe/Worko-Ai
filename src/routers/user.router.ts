import express from "express";
import { UserController } from "../controllers/user.controller";
import { Validator } from "../validators/user.validator";
import { validateRequest } from "../middleware/validation.middleware";
import auth from "../middleware/auth.middleware";

const router = express.Router();

router.get("/list_user", auth(), UserController.getUsers);

router.get("/:userId", auth(), UserController.getUser);

router.post(
  "/create",
  validateRequest(Validator.createUser),
  UserController.createUser
);

router.put(
  "/update_user/:userId",
  validateRequest(Validator.updateUser),
  auth(),
  UserController.updateUserPut
);

router.patch("/update_user/:userId", auth(), UserController.updateUserPatch);

router.patch(
  "/soft_delete/:userId",
  validateRequest(Validator.updateUser),
  auth(),
  UserController.softDeleteUser
);

export const UserRouter = router;
