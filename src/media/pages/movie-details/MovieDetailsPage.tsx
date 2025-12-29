import { getMovieByIdAction } from "@/media/actions/getMovieById.action";
import { getMovieCreditsAction } from "@/media/actions/getMovieCredits.action";
import { getMovieReviewsAction } from "@/media/actions/getMovieReviews.action";
import { HeroSection } from "@/media/components/HeroSection";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data: movie } = useQuery({
    queryKey: ["movie", { movieId }],
    queryFn: () => getMovieByIdAction(+movieId!),
    staleTime: 1000 * 60 * 5,
  });

  const { data: credits } = useQuery({
    queryKey: ["movie-credits", { movieId }],
    queryFn: () => getMovieCreditsAction(+movieId!),
    staleTime: 1000 * 60 * 5,
  });

  const { data: reviews } = useQuery({
    queryKey: ["movie-reviews", { movieId }],
    queryFn: () => getMovieReviewsAction(+movieId!),
  });

  return (
    <main className="min-h-screen streaming-gradient">
      {/* <div className="fixed top-4 left-4 z-50">
        <Button asChild variant="glass" size="icon" className="rounded-full">
          <Link to="/">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
      </div> */}

      {/* Hero Section */}
      <HeroSection
        title={movie?.title || ""}
        tagline={movie?.tagline}
        overview={movie?.overview || ""}
        posterPath={movie?.poster_path || ""}
        backdropPath={movie?.backdrop_path || ""}
        rating={movie?.vote_average || 1}
        releaseDate={movie?.release_date.toString() || ""}
        runtime={movie?.runtime}
        genres={movie?.genres || []}
        type="movie"
      />

      {/* Cast Section */}
      {/* {!isLoadingCredits && credits && <CastSection cast={credits.cast} />} */}

      {/* Reviews Section */}
      {/* {!isLoadingReviews && reviews && (
        <ReviewsSection reviews={reviews.results} />
      )} */}

      {/* Footer spacing */}
      <div className="h-20" />
    </main>
  );
};
