import { useNavigate, useSearchParams } from "react-router";

import { MediaCarousel } from "@/media/components/MediaCarousel";
import { HeroCarousel } from "@/media/components/HeroCarousel";
import { CustomNavbar } from "@/media/components/CustomNavbar";
import { Button } from "@/components/ui/button";
import { useMedia } from "@/media/hooks/useMedia";
import { useCategory } from "@/media/hooks/useCategory";
import type { MediaType } from "@/media/types/mediaType.type";

export const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const typeParam = searchParams.get("type");

  const mediaType: MediaType =
    typeParam === "movies" || typeParam === "series" ? typeParam : "movies";

  const { data: trendingMedia } = useMedia(mediaType);

  const { data: categories } = useCategory(mediaType);

  const handleShowAll = () => {
    navigate(`/${mediaType}`);
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4">
      <HeroCarousel media={trendingMedia?.slice(0, 5) || []} />

      <CustomNavbar visible={true} />

      <MediaCarousel media={trendingMedia} title="Trending" />
      <MediaCarousel mediaCategories={categories} title="Categories" />

      <Button className="justify-self-center" onClick={handleShowAll}>
        Show All
      </Button>
    </div>
  );
};
