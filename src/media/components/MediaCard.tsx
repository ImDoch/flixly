import { Card, CardContent } from "@/components/ui/card";
import type { MediaBase } from "../types/media.interface";

interface Props {
  media: MediaBase;
}

export const MediaCard = ({ media }: Props) => {
  return (
    <Card className="w-45 overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105">
      <CardContent className="relative flex aspect-2/3 items-center justify-center p-6">
        <img
          src={media.poster_path}
          alt={`${media.title} image`}
          className="absolute inset-0 w-full h-full object-cover object-center mask-[linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]"
        />

        <h2 className="relative z-10 h-full flex flex-col justify-end items-center text-center text-white text-md font-bold">
          {media.title}
        </h2>
      </CardContent>
    </Card>
  );
};
