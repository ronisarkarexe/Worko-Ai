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
      password: '123456'
    };
    (UserService.createUser as jest.Mock).mockResolvedValue({ ...userData });
    const response = await request(app)
      .post("/api/v1/worko/user/create")
      .send(userData);
    expect(response.status).toBe(200);
  });

  it("should get user by id", async () => {
    const mockUser = {
      _id: "1",
      email: "user1@example.com",
      name: "User One",
      age: 20,
      city: "City One",
      zipCode: "11111",
      password: '123456'
    };

    (UserService.getUser as jest.Mock).mockResolvedValue(mockUser);
    const response = await request(app).get("/api/v1/worko/user/1");
    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(mockUser);
  });

  it("should list all users", async () => {
    const mockUsers = [
      {
        _id: "1",
        email: "user1@example.com",
        name: "User One",
        age: 20,
        city: "City One",
        zipCode: "11111",
        password: '123456'
      },
      {
        _id: "2",
        email: "user2@example.com",
        name: "User Two",
        age: 30,
        city: "City Two",
        zipCode: "22222",
        password: '123456'
      },
    ];

    (UserService.getUsers as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app).get("/api/v1/worko/user/list_user");
    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(mockUsers);
  });

  it("should update user using put method", async () => {
    const mockUsers = [
      {
        _id: "1",
        email: "user1@example.com",
        name: "User One",
        age: 20,
        city: "City One",
        zipCode: "11111",
        password: '123456'
      },
    ];

    const userData = {
      _id: "1",
      email: "user1@example.com",
      name: "User One",
      age: 20,
      city: "City One",
      zipCode: "11111",
      password: '123456'
    };

    (UserService.updateUserPut as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app)
      .put("/api/v1/worko/user/update_user/1")
      .send(userData);
    expect(response.status).toBe(200);
    expect(response.body.data[0]).toEqual(userData);
  });

  it("should update user using patch method", async () => {
    const mockUsers = [
      {
        _id: "1",
        email: "user1@example.com",
        name: "User One",
        age: 20,
        city: "City One",
        zipCode: "11111",
        password: '123456'
      },
    ];

    const userData = {
      _id: "1",
      email: "user1@example.com",
      name: "User One",
      age: 20,
      city: "City One",
      zipCode: "11111",
      password: '123456'
    };

    (UserService.updateUserPut as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app)
      .put("/api/v1/worko/user/update_user/1")
      .send(userData);
    expect(response.status).toBe(200);
    expect(response.body.data[0].email).toEqual(userData.email);
  });

  it("should user soft deleted", async () => {
    const mockUsers = [
      {
        _id: "1",
        email: "user1@example.com",
        name: "User One",
        age: 20,
        city: "City One",
        zipCode: "11111",
        isDelete: false,
        password: '123456'
      },
    ];
    (UserService.softDeleteUser as jest.Mock).mockResolvedValue(mockUsers);

    const response = await request(app).patch(
      `/api/v1/worko/user/soft_delete/1`
    );
    expect(response.status).toBe(200);
  });
});
