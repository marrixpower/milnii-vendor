import { apiPrivate } from "app/api";
import { CreateUserRequest, GetUserRequest } from "./types";

export class User {
  static async createUser({
    payload,
  }: CreateUserRequest["payload"]): Promise<CreateUserRequest["response"]> {
    const { data } = await apiPrivate.post("api/v1/user/user/me", {
      ...payload,
    });

    return data;
  }

  static async getUser({}: GetUserRequest["payload"]): Promise<
    GetUserRequest["response"]
  > {
    const { data } = await apiPrivate.get("api/v1/user/user/me");

    return data;
  }
}
