import { mediaApi } from "../api/mediaApi";
import type { CreditsResponse } from "../types/credits.response";

export const getMovieCreditsAction = async (
  movieId: number
): Promise<CreditsResponse> => {
  const { data } = await mediaApi.get<CreditsResponse>(
    `/movie/${movieId}/credits`
  );

  return data;
};
