import { mediaApi } from "../api/mediaApi";
import type { Movie } from "../types/movie.response";

export const getMovieDetailsAction = async (
  movieId: number
): Promise<Movie> => {
  const { data } = await mediaApi.get<Movie>(`/movie/${movieId}`);

  const movieWithImage = {
    ...data,
    backdrop_path: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    poster_path: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
  };

  return movieWithImage;
};
