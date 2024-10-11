import { apiPrivate } from "app/api";
import {
  AddPhotosRequest,
  CreateBusinessRequest,
  GetBusinessRequest,
  GetBusinessesRequest,
  UpdateBusinessRequest,
} from "./types";

export class Business {
  static async createBusiness({
    data,
  }: CreateBusinessRequest["payload"]): Promise<
    CreateBusinessRequest["response"]
  > {
    const response = await apiPrivate.post("api/v1/user/business", data);

    return response.data;
  }

  static async updateBusiness({
    _id,
    data,
  }: UpdateBusinessRequest["payload"]): Promise<
    UpdateBusinessRequest["response"]
  > {
    const response = await apiPrivate.patch(
      `api/v1/user/business/${_id}`,
      data
    );

    return response.data;
  }

  static async getBusiness({
    _id,
  }: GetBusinessRequest["payload"]): Promise<GetBusinessRequest["response"]> {
    const response = await apiPrivate.get(`api/v1/user/business/${_id}`);

    return response.data;
  }

  static async getBusinesses(
    params: GetBusinessesRequest["payload"]
  ): Promise<GetBusinessesRequest["response"]> {
    const { data } = await apiPrivate.get(`api/v1/user/business`, { params });

    return data;
  }

  static async addPhotos({
    _id,
    data,
  }: AddPhotosRequest["payload"]): Promise<AddPhotosRequest["response"]> {
    const response = await apiPrivate.patch(
      `api/v1/user/business/${_id}/photo`,
      data
    );

    return response.data;
  }
}
