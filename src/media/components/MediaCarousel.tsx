import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { MediaBase } from "../types/mediaBase.interface";
import type { Category } from "../types/categories.response";
import { useNavigate } from "react-router";

interface Props {
  title: string;
  media?: MediaBase[];
  mediaCategories?: Category[];
}

export const MediaCarousel = ({ title, media, mediaCategories }: Props) => {
  const navigate = useNavigate();

  const handleMediaClick = (item: MediaBase) => {
    navigate(
      item.media_type === "movie" ? `/movies/${item.id}` : `/series/${item.id}`
    );
  };

  const handleCategoryClick = (categoryId: number) => {
    navigate(`/category/${categoryId}`);
  };
  return (
    <div className="w-full">
      <h2 className="ml-6 text-2xl font-bold">{title}</h2>

      <div className="p-3 flex justify-center items-center">
        <Carousel
          opts={{
            dragFree: true,
          }}
          className="w-full max-w-11/12 flex justify-center "
        >
          <CarouselContent>
            {media &&
              media.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-auto shrink-0 px-3 py-6"
                >
                  <div className="px-2 py-1 group transition-transform duration-300 hover:scale-105">
                    <Card
                      className="w-45 overflow-hidden cursor-pointer"
                      onClick={() => handleMediaClick(item)}
                    >
                      <CardContent className="relative flex aspect-2/3 items-center justify-center p-6">
                        <img
                          src={item.poster_path}
                          alt={`${item.title} image`}
                          className="absolute inset-0 w-full h-full object-cover object-center mask-[linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]"
                          loading="lazy"
                        />

                        <h2 className="relative z-10 h-full flex flex-col justify-end items-center text-center text-white text-md font-bold">
                          {item.title}
                        </h2>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}

            {mediaCategories &&
              mediaCategories.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-auto shrink-0 py-6"
                >
                  <div className="px-2 py-1 group transition-transform duration-300 hover:scale-105">
                    <Card
                      className="w-45 cursor-pointer bg-linear-to-br from-slate-80 via-slate-700 to-slate-600"
                      onClick={() => handleCategoryClick(item.id)}
                    >
                      <CardContent className=" flex aspect-2/3 items-center justify-center p-6">
                        <span className="text-2xl font-semibold text-center">
                          {item.name}
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
