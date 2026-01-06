export interface HeroMedia {
  id: number;
  title: string;
  tagline?: string;
  overview: string;
  posterPath: string;
  backdropPath?: string;

  rating?: number;

  year?: number;
  fullDate?: string;

  runtime?: number;
  seasons?: number;
  episodes?: number;

  genres?: { id: number; name: string }[];
}
