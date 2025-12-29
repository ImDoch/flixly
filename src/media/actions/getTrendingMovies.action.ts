import { mediaApi } from "../api/mediaApi";
import type { MediaBase } from "../types/mediaBase.interface";
import type { MoviesResponse } from "../types/media.response";

export const getTrendingMoviesAction = async (): Promise<MediaBase[]> => {
  const { data } = await mediaApi.get<MoviesResponse>("/trending/movie/day");

  const moviesWithImages = data.results.map((movie) => ({
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    media_type: "movie" as const,
    original_language: movie.original_language,
    genre_ids: movie.genre_ids,
    popularity: movie.popularity,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    release_date: movie.release_date,
    poster_path: `https://image.tmdb.org/t/p/w342/${movie.poster_path}`,
    backdrop_path: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`,
  }));

  return moviesWithImages;
};
