import { mediaApi } from "../api/mediaApi";
import type { MediaBase } from "../types/mediaBase.interface";
import type { TvResponse } from "../types/media.response";
import type { PaginatedResponse } from "../types/paginatedResponse.interface";

export const getSeriesByCategoryAction = async (
  categoryId: number,
  page: number
): Promise<PaginatedResponse<MediaBase>> => {
  const { data } = await mediaApi.get<TvResponse>("/discover/tv", {
    params: {
      with_genres: categoryId,
      page,
    },
  });

  const SeriesWithImages = data.results.map((serie) => ({
    id: serie.id,
    title: serie.name,
    overview: serie.overview,
    media_type: "tv" as const,
    original_language: serie.original_language,
    genre_ids: serie.genre_ids,
    popularity: serie.popularity,
    vote_average: serie.vote_average,
    vote_count: serie.vote_count,
    release_date: serie.first_air_date,
    poster_path: `https://image.tmdb.org/t/p/w342/${serie.poster_path}`,
    backdrop_path: `https://image.tmdb.org/t/p/w1280/${serie.backdrop_path}`,
  }));

  return {
    ...data,
    results: SeriesWithImages,
  };
};
