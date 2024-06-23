import express from "express";
import { UserRouter } from "../routers/user.router";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/worko/user",
    route: UserRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export const Routers = router;
