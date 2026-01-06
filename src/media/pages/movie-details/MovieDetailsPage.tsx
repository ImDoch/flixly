import { getMovieDetailsAction } from "@/media/actions/getMovieDetails.action";
import { HeroSection } from "@/media/components/HeroSection";
import { movieToHeroMedia } from "@/media/helpers/movieToHeroMedia";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data: movie, isLoading } = useQuery({
    queryKey: [MovieDetailsPage, { movieId }],
    queryFn: () => getMovieDetailsAction(+movieId!),
  });

  if (isLoading || !movie) {
    return <div>Cargando...</div>; // o Skeleton
  }

  const heroMedia = movieToHeroMedia(movie);

  return (
    <div>
      <HeroSection type="movie" media={heroMedia} />
    </div>
  );
};
