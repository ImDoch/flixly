import { mediaApi } from '../api/mediaApi';
import type { Movie, MovieResponse } from '../types/movies.response';

export const getTrendingMoviesAction = async (): Promise<Movie[]> => {
  const { data } = await mediaApi.get<MovieResponse>('/trending/movie/day');

  const moviesWithImages = data.results.map((movie) => ({
    ...movie,
    poster_path: `https://image.tmdb.org/t/p/w342/${movie.poster_path}`,
    backdrop_path: `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`,
  }));

  return moviesWithImages;
};
