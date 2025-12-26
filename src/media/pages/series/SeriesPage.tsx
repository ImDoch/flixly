import { getPaginatedSeriesAction } from "@/media/actions/getPaginatedSeries.action";
import { CustomPagination } from "@/media/components/CustomPagination";
import { MediaCarousel } from "@/media/components/MediaCarousel";
import { MediaGrid } from "@/media/components/MediaGrid";
import { useCategory } from "@/media/hooks/useCategory";
import type { MediaType } from "@/media/types/mediaType.type";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useSearchParams } from "react-router";

export const SeriesPage = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const { data: moviesResponse } = useQuery({
    queryKey: ["series", { page }],
    queryFn: () => getPaginatedSeriesAction(+page),
  });

  const pathname = location.pathname;

  const mediaType: MediaType =
    pathname === "movies" || pathname === "series" ? pathname : "movies";

  const { data: categories } = useCategory(mediaType);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-3xl font-bold text-center">Series</h2>

      <MediaCarousel title="Categories" mediaCategories={categories} />

      <MediaGrid media={moviesResponse?.results || []} />

      <div className="flex justify-center items-center">
        <CustomPagination totalPages={moviesResponse?.total_pages || 1} />
      </div>
    </div>
  );
};
