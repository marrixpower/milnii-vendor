import useSWR from "swr";
import { TgGtCategoriesParams } from "./types";
import { getCategories } from "./api";

export const useGetCategories = (params: TgGtCategoriesParams) => {
  const { data: categories } = useSWR(["getCategories", params], ([, par]) =>
    getCategories(par)
  );
  return { categories };
};
