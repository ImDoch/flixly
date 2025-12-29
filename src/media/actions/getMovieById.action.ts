import { mediaApi } from "../api/mediaApi";
import type { MovieResponse } from "../types/movie.response";

export const getMovieByIdAction = async (
  movieId: number
): Promise<MovieResponse> => {
  const { data } = await mediaApi.get<MovieResponse>(`/movie/${movieId}`);

  return data;
};
