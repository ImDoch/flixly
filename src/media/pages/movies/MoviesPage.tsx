import { getPaginatedMoviesAction } from "@/media/actions/getPaginatedMovies.action";
import { MediaCarousel } from "@/media/components/MediaCarousel";
import { MediaGrid } from "@/media/components/MediaGrid";
import { useCategory } from "@/media/hooks/useCategory";
import type { MediaType } from "@/media/types/mediaType.type";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";

export const MoviesPage = () => {
  const location = useLocation();
  const { data: movies } = useQuery({
    queryKey: ["movies"],
    queryFn: getPaginatedMoviesAction,
  });

  const pathname = location.pathname;

  const mediaType: MediaType =
    pathname === "movies" || pathname === "series" ? pathname : "movies";

  const { data: categories } = useCategory(mediaType);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-3xl font-bold text-center">Movies</h2>

      <MediaCarousel title="Categories" mediaCategories={categories} />

      <MediaGrid media={movies || []} />
    </div>
  );
};
