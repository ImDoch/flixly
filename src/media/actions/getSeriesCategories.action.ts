import { mediaApi } from "../api/mediaApi";
import type { Categories, Category } from "../types/categories.response";

export const getSeriesCategoriesAction = async (): Promise<Category[]> => {
  const { data } = await mediaApi.get<Categories>("genre/tv/list");

  return data.genres;
};
