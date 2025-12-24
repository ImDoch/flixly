import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CustomImagesCarousel = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Carousel
        className="w-full
    max-w-xs
    md:max-w-xl
    lg:max-w-3xl
    "
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 flex justify-center items-center">
                <Card className="w-full relative">
                  <CardContent className="flex aspect-video items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
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
