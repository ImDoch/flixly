import { mediaApi } from "../api/mediaApi";
import type { Serie } from "../types/serie.response";

export const getSeriesDetailsAction = async (
  serieId: number
): Promise<Serie> => {
  const { data } = await mediaApi.get<Serie>(`/tv/${serieId}`);

  const serieWithImage = {
    ...data,
    backdrop_path: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    poster_path: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
  };

  return serieWithImage;
};
