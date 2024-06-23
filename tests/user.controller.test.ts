import request from "supertest";
import express, { Application } from "express";
import { Routers } from "../src/module_router/module.router";
import { UserService } from "../src/services/user.service";

jest.mock("../src/services/user.service");

const app: Application = express();
app.use(express.json());
app.use("/api/v1/", Routers);

describe("User Controller", () => {
  it("should create a new user", async () => {
    const userData = {
      email: "user1@example.com",
      name: "User One",
      age: 20,
      city: "City One hello",
      zipCode: 11111,
    };
    (UserService.createUser as jest.Mock).mockResolvedValue({ ...userData });
    const response = await request(app).post("/api/v1/user/create").send(userData);
    expect(response.status).toBe(200);
  });
});
