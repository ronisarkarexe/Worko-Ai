import request from "supertest";
import express, { Application } from "express";
import { AuthService } from "../src/services/auth.service";
import { Routers } from "../src/module_router/module.router";
jest.mock("../src/services/auth.service");

const app: Application = express();
app.use(express.json());
app.use("/api/v1/", Routers);

describe("Auth Controller", () => {
  it("should login user successfully", async () => {
    const mockAuthData = {
      email: "user@example.com",
      password: "123",
    };

    const mockResponse = {
      accessToken: "token",
    };

    (AuthService.login as jest.Mock).mockResolvedValue(mockResponse);

    const response = await request(app)
      .post("/api/v1/worko/auth/login")
      .send(mockAuthData);

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("User login successfully!");
    expect(response.body.data).toEqual(mockResponse);
  });

  it("should fail to login user with invalid credentials", async () => {
    const mockAuthData = {
      email: "user@example.com",
      password: "789654",
    };

    (AuthService.login as jest.Mock).mockRejectedValue(
      new Error("Invalid credentials")
    );

    const response = await request(app)
      .post("/api/v1/worko/auth/login")
      .send(mockAuthData);

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Fail to login user!");
  });
});
