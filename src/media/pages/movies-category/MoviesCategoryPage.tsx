import { getMoviesByCategoryAction } from "@/media/actions/getMoviesByCategory.action";
import { CustomPagination } from "@/media/components/CustomPagination";
import { MediaGrid } from "@/media/components/MediaGrid";
import { useCategory } from "@/media/hooks/useCategory";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";

export const MoviesCategoryPage = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const { data: movies } = useQuery({
    queryKey: ["movies", { categoryId, page }],
    queryFn: () => getMoviesByCategoryAction(+categoryId!, +page),
    staleTime: 1000 * 60 * 5,
  });

  const { data: categories } = useCategory("movies");

  const categoryName = categories?.find(
    (category) => category.id === +categoryId!
  )?.name;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">{`Movies - Category: ${categoryName}`}</h2>

      <MediaGrid media={movies?.results || []} />
      <CustomPagination totalPages={movies?.total_pages || 0} />
    </div>
  );
};
