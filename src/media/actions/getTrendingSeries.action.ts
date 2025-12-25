import { mediaApi } from '../api/mediaApi';
import type { MediaBase, TvResponse } from '../types/media.response';

export const getTrendingSeriesAction = async (): Promise<MediaBase[]> => {
  const { data } = await mediaApi.get<TvResponse>('/trending/tv/day');

  const seriesWithImages = data.results.map((serie) => ({
    id: serie.id,
    title: serie.name, // 👈 normalización aquí
    overview: serie.overview,
    poster_path: `https://image.tmdb.org/t/p/w342/${serie.poster_path}`,
    backdrop_path: `https://image.tmdb.org/t/p/w1280/${serie.backdrop_path}`,
    media_type: 'tv' as const,
    original_language: serie.original_language,
    genre_ids: serie.genre_ids,
    popularity: serie.popularity,
    vote_average: serie.vote_average,
    vote_count: serie.vote_count,
    release_date: serie.first_air_date,
  }));

  return seriesWithImages;
};
