export interface MediaBase {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  media_type: "movie" | "tv";
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
}
