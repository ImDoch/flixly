import type { HeroMedia } from "../types/heroMedia";
import type { Serie } from "../types/serie.response";

export const serieToHeroMedia = (serie: Serie): HeroMedia => ({
  id: serie.id,
  title: serie.name,
  tagline: serie.tagline,
  overview: serie.overview,

  posterPath: serie.poster_path,
  backdropPath: serie.backdrop_path,

  rating: serie.vote_average,

  year: new Date(serie.first_air_date).getFullYear(),
  fullDate: serie.first_air_date,

  seasons: serie.number_of_seasons,
  episodes: serie.number_of_episodes,

  genres: serie.genres,
});
