import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const MediaCarousel = () => {
  return (
    <div className="w-full">
      <h2 className="ml-6 mb-4 text-2xl">title</h2>

      <div className="p-3 flex justify-center items-center">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-11/12 flex justify-center "
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-auto shrink-0">
                <div className="p-1">
                  <Card className="w-45">
                    <CardContent className=" flex aspect-2/3 items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex justify-center items-center" />
          <CarouselNext className="hidden md:flex justify-center items-center" />
        </Carousel>
      </div>
    </div>
  );
};
