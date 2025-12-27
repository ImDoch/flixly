import { mediaApi } from '../api/mediaApi';
import type { MediaBase } from '../types/media.interface';
import type { PaginatedResponse } from '../types/paginatedResponse.interface';
import type {
  MovieDTO,
  TvDTO,
  MultiSearchResponse,
} from '../types/media.response';

export const getMediaByQueryAction = async (
  query: string,
  page: number
): Promise<PaginatedResponse<MediaBase>> => {
  const { data } = await mediaApi.get<MultiSearchResponse>('/search/multi', {
    params: {
      query,
      page,
      include_adult: false,
    },
  });

  const media: MediaBase[] = data.results
    // ❌ descartamos people
    .filter(
      (item): item is MovieDTO | TvDTO =>
        item.media_type === 'movie' || item.media_type === 'tv'
    )
    .map((item) => {
      if (item.media_type === 'movie') {
        return {
          id: item.id,
          title: item.title,
          overview: item.overview,
          media_type: 'movie',
          original_language: item.original_language,
          genre_ids: item.genre_ids,
          popularity: item.popularity,
          vote_average: item.vote_average,
          vote_count: item.vote_count,
          release_date: item.release_date,
          poster_path: `https://image.tmdb.org/t/p/w342/${item.poster_path}`,
          backdrop_path: `https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`,
        };
      }

      // TV
      return {
        id: item.id,
        title: item.name, // 👈 normalizamos
        overview: item.overview,
        media_type: 'tv',
        original_language: item.original_language,
        genre_ids: item.genre_ids,
        popularity: item.popularity,
        vote_average: item.vote_average,
        vote_count: item.vote_count,
        release_date: item.first_air_date, // 👈 normalizamos
        poster_path: `https://image.tmdb.org/t/p/w342/${item.poster_path}`,
        backdrop_path: `https://image.tmdb.org/t/p/w1280/${item.backdrop_path}`,
      };
    });

  return {
    ...data,
    results: media,
  };
};
