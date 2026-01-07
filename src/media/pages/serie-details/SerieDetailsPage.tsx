import { getSeriesDetailsAction } from "@/media/actions/getSerieDetails.action";
import { HeroSection } from "@/media/components/HeroSection";
import { serieToHeroMedia } from "@/media/helpers/serieToHeroMedia";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

export const SerieDetailsPage = () => {
  const { serieId } = useParams();

  const {
    data: serie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["serie", { serieId }],
    queryFn: () => getSeriesDetailsAction(+serieId!),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Cargando...</div>;

  if (error || !serie) return <div>Movie dont found</div>;

  const heroMedia = serieToHeroMedia(serie);

  return (
    <div>
      <HeroSection type="serie" media={heroMedia} />
    </div>
  );
};
