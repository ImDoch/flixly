import { MediaCarousel } from '@/media/components/MediaCarousel';
import { HeroCarousel } from '@/media/components/HeroCarousel';
import { CustomNavbar } from '@/media/components/CustomNavbar';
import { Button } from '@/components/ui/button';

export const HomePage = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-4">
      <HeroCarousel />

      <CustomNavbar visible={true} />

      <MediaCarousel />
      <MediaCarousel />

      <Button>Show All</Button>
    </div>
  );
};
