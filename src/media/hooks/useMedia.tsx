import { useQuery } from "@tanstack/react-query";
import { getTrendingMoviesAction } from "../actions/getTrendingMovies.action";
import { getTrendingSeriesAction } from "../actions/getTrendingSeries.action";

export const useMedia = (mediaType: "movies" | "series") => {
  return useQuery({
    queryKey: ["trendingMovies", mediaType],
    queryFn: () =>
      mediaType === "movies"
        ? getTrendingMoviesAction()
        : getTrendingSeriesAction(),
    staleTime: 1000 * 60 * 5,
  });
};
