import { getSeriesByCategoryAction } from "@/media/actions/getSeriesByCategory.action";
import { CustomPagination } from "@/media/components/CustomPagination";
import { MediaGrid } from "@/media/components/MediaGrid";
import { useCategory } from "@/media/hooks/useCategory";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router";

export const SeriesCategoryPage = () => {
  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const { data: series } = useQuery({
    queryKey: ["series", { categoryId, page }],
    queryFn: () => getSeriesByCategoryAction(+categoryId!, +page),
    staleTime: 1000 * 60 * 5,
  });

  const { data: categories } = useCategory("series");

  const categoryName = categories?.find(
    (category) => category.id === +categoryId!
  )?.name;

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold text-center">{`Series - Category: ${categoryName}`}</h2>

      <MediaGrid media={series?.results || []} />
      <CustomPagination totalPages={series?.total_pages || 0} />
    </div>
  );
};
