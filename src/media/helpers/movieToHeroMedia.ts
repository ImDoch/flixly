import type { HeroMedia } from "../types/heroMedia";
import type { Movie } from "../types/movie.response";

export const movieToHeroMedia = (movie: Movie): HeroMedia => ({
  id: movie.id,
  title: movie.title,
  tagline: movie.tagline,
  overview: movie.overview,

  posterPath: movie.poster_path,
  backdropPath: movie.backdrop_path,

  rating: movie.vote_average,

  year: new Date(movie.release_date).getFullYear(),
  fullDate: movie.release_date,

  runtime: movie.runtime,
  genres: movie.genres,
});
