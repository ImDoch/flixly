import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';

import { MediaCarousel } from '@/media/components/MediaCarousel';
import { HeroCarousel } from '@/media/components/HeroCarousel';
import { CustomNavbar } from '@/media/components/CustomNavbar';
import { Button } from '@/components/ui/button';
import { getTrendingMoviesAction } from '@/media/actions/getTrendingMovies.action';
import { getTrendingSeriesAction } from '@/media/actions/getTrendingSeries.action';

export const HomePage = () => {
  const [searchParams] = useSearchParams();

  const mediaType = searchParams.get('type') ?? 'movies';

  const { data: trendingMedia } = useQuery({
    queryKey: ['trendingMovies', mediaType],
    queryFn: () =>
      mediaType === 'movies'
        ? getTrendingMoviesAction()
        : getTrendingSeriesAction(),
  });

  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4">
      <HeroCarousel media={trendingMedia?.slice(0, 5) || []} />

      <CustomNavbar visible={true} />

      <MediaCarousel />
      <MediaCarousel />

      <Button>Show All</Button>
    </div>
  );
};
