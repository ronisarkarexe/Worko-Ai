import { Validator } from "../src/validators/user.validator";

describe("User Validator", () => {
  describe("Create User", () => {
    it("should pass validation for valid user data", () => {
      const userData = {
        email: "test@example.com",
        zipCode: 12345,
      };

      const result = Validator.createUser.validate(userData);
      expect(result.error).toBeUndefined();
    });

    it("should fail validation if email is missing", () => {
      const userData = {
        zipCode: 12345,
      };

      const result = Validator.createUser.validate(userData);
      expect(result.error).toBeDefined();
      expect(result?.error?.details[0].message).toEqual("Email is required.");
    });

    it("should fail validation if zipCode is missing", () => {
      const userData = {
        email: "test@example.com",
      };

      const result = Validator.createUser.validate(userData);
      expect(result.error).toBeDefined();
      expect(result?.error?.details[0].message).toEqual(
        "Zip Code is required."
      );
    });
  });

  describe("Update User", () => {
    it("should pass validation for valid user data", () => {
      const userData = {
        email: "test@example.com",
        zipCode: 12345,
      };

      const result = Validator.updateUser.validate(userData);
      expect(result.error).toBeUndefined();
    });

    it("should fail validation if email is not a valid email address", () => {
      const userData = {
        email: "invalid-email",
        zipCode: 12345,
      };

      const result = Validator.updateUser.validate(userData);
      expect(result.error).toBeDefined();
      expect(result?.error?.details[0].message).toEqual(
        "\"email\" must be a valid email"
      );
    });

    it("should not fail validation if email is missing", () => {
      const userData = {
        zipCode: 12345,
      };

      const result = Validator.updateUser.validate(userData);
      expect(result.error).toBeUndefined();
    });

    it("should fail validation if zipCode is not a number", () => {
      const userData = {
        email: "test@example.com",
        zipCode: "invalid-zip",
      };

      const result = Validator.updateUser.validate(userData);
      expect(result.error).toBeDefined();
      expect(result?.error?.details[0].message).toEqual(
        "\"zipCode\" must be a number"
      );
    });

    it("should not fail validation if zipCode is missing", () => {
      const userData = {
        email: "test@example.com",
      };

      const result = Validator.updateUser.validate(userData);
      expect(result.error).toBeUndefined();
    });
  });
});
