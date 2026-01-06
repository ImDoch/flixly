import { getMovieDetailsAction } from "@/media/actions/getMovieDetails.action";
import { HeroSection } from "@/media/components/HeroSection";
import type { Movie } from "@/media/types/movie.response";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data: movie, isLoading } = useQuery({
    queryKey: [MovieDetailsPage, { movieId }],
    queryFn: () => getMovieDetailsAction(+movieId!),
  });

  if (isLoading) {
    return <div>Cargando...</div>; // o Skeleton
  }

  return (
    <div>
      <HeroSection type="movie" movie={movie || ({} as Movie)} />
    </div>
  );
};
