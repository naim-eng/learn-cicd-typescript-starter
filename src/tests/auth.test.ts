
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("getAPIKey", () => {
  test("returns API key when authorization is valid", () => {
    const headers = {
      authorization: "ApiKey my-secret-key",
    };
     
     expect(getAPIKey(headers)).toBe("my-secret-key");
  });

  test("returns null when authorization header is missing", () => {
    const headers = {};

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when authentication type is incorrect", () => {
    const headers = {
      authorization: "Bearer my-secret-key",
    };

    expect(getAPIKey(headers)).toBeNull();
  });

  test("returns null when API key is missing", () => {
    const headers = {
      authorization: "ApiKey",
    };

    expect(getAPIKey(headers)).toBeNull();
  });
});
