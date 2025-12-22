import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CustomNavbar } from "@/media/components/CustomNavbar";

export const HomePage = () => {
  return (
    <div className=" p-3 flex flex-col items-center justify-center">
      <div>
        <Carousel className="w-full max-w-xs relative">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 w-80 max-w-4xl ">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" top-2/4" />
          <CarouselNext className=" top-2/4" />
        </Carousel>
      </div>

      <CustomNavbar visible={true} />
    </div>
  );
};
