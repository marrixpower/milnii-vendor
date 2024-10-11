import { apiPrivate } from "app/api";
import { TCategoryResponse, TgGtCategoriesParams } from "./types";

export const getCategories = async (params: TgGtCategoriesParams) => {
  const { data } = await apiPrivate<TCategoryResponse>(
    `/api/v1/user/category`,
    {
      params,
    }
  );
  return data;
};
