import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { MediaBase } from '../types/media.interface';

interface Props {
  media: MediaBase[];
}

export const HeroCarousel = ({ media }: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        className="w-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {media.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="w-full rounded-lg overflow-hidden border-none">
                <CardContent className="relative h-[70vh] lg:h-auto lg:max-h-[87vh] lg:aspect-video p-0">
                  <img
                    src={item.backdrop_path}
                    alt={`${item.title} poster`}
                    className="absolute inset-0 w-full h-full object-cover object-center mask-[linear-gradient(to_bottom,black_0%,black_60%,transparent_100%)]"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

                  <div className="relative z-10 h-full flex flex-col justify-end items-center text-center p-6 text-white">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm lg:text-base line-clamp-2">
                      {item.overview}
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
