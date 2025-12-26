import { useQuery } from "@tanstack/react-query";
import { getMoviesCategoriesAction } from "../actions/getMoviesCategories.action";
import { getSeriesCategoriesAction } from "../actions/getSeriesCategory.action";

export const useCategory = (mediaType: "movies" | "series") => {
  return useQuery({
    queryKey: ["mediaCategories"],
    queryFn: () =>
      mediaType === "movies"
        ? getMoviesCategoriesAction()
        : getSeriesCategoriesAction(),
    staleTime: 1000 * 60 * 5,
  });
};
