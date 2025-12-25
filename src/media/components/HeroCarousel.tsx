import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { Movie } from '../types/movies.response';

interface Props {
  media: Movie[];
}

export const HeroCarousel = ({ media }: Props) => {
  return (
    <div className="w-full flex justify-center items-center max-w-11/12">
      <Carousel className="w-full">
        <CarouselContent>
          {media.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="w-full rounded-lg overflow-hidden border-none">
                <CardContent className="relative h-[70vh] lg:h-full lg:aspect-video  p-0">
                  <img
                    src={item.backdrop_path}
                    alt={`${item.title} poster`}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm lg:text-base">
                      {item.overview.slice(0, 120).trim()}…
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute
              left-4
              top-1/2
              -translate-y-1/2 hidden md:flex justify-center items-center"
        />
        <CarouselNext
          className="absolute
              right-4
              top-1/2
              -translate-y-1/2 hidden md:flex justify-center items-center"
        />
      </Carousel>
    </div>
  );
};
