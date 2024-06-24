import express from "express";
import { UserRouter } from "../routers/user.router";
import { AuthRouter } from "../routers/auth.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/worko/user",
    route: UserRouter,
  },
  {
    path: "/worko/auth",
    route: AuthRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const Routers = router;
