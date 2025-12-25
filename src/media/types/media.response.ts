export interface MoviesResponse {
  page: number;
  results: MovieDTO[];
  total_pages: number;
  total_results: number;
}

export interface TvResponse {
  page: number;
  results: TvDTO[];
  total_pages: number;
  total_results: number;
}

export interface MediaBase {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  media_type: 'movie' | 'tv';
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
  release_date: string;
}

export interface MovieDTO {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: 'movie';
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface TvDTO {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: 'tv';
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}
