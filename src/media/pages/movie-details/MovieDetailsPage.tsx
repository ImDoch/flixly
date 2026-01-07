import { getMovieDetailsAction } from "@/media/actions/getMovieDetails.action";
import { HeroSection } from "@/media/components/HeroSection";
import { movieToHeroMedia } from "@/media/helpers/movieToHeroMedia";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: [MovieDetailsPage, { movieId }],
    queryFn: () => getMovieDetailsAction(+movieId!),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Cargando...</div>;

  if (error || !movie) return <div>Movie dont found</div>;

  const heroMedia = movieToHeroMedia(movie);

  return (
    <div>
      <HeroSection type="movie" media={heroMedia} />
    </div>
  );
};
