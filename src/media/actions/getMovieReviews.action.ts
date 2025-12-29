import { mediaApi } from "../api/mediaApi";
import type { ReviewsResponse } from "../types/reviews.response";

export const getMovieReviewsAction = async (
  movieId: number
): Promise<ReviewsResponse> => {
  const { data } = await mediaApi.get<ReviewsResponse>(
    `/movie/${movieId}/reviews`
  );

  return data;
};
