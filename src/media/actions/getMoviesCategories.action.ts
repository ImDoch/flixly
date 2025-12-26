import { mediaApi } from "../api/mediaApi";
import type { Categories, Category } from "../types/categories.response";

export const getMoviesCategoriesAction = async (): Promise<Category[]> => {
  const { data } = await mediaApi.get<Categories>("genre/movie/list");

  return data.genres;
};
