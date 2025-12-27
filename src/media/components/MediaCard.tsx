import { Card, CardContent } from '@/components/ui/card';
import type { MediaBase } from '../types/media.interface';

interface Props {
  media: MediaBase;
}

export const MediaCard = ({ media }: Props) => {
  return (
    <Card className="w-full md:w-45 overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-105">
      <CardContent className=" relative aspect-2/3 p-0">
        <img
          src={media.poster_path}
          alt={`${media.title} image`}
          className="absolute inset-0 w-full h-full object-cover object-center mask-[linear-gradient(to_bottom,black_0%,black_40%,transparent_100%)]"
        />

        <h2 className="z-10 absolute bottom-3 left-3 right-3 text-center text-whithe text-sm font-bold line-clamp-2">
          {media.title}
        </h2>
      </CardContent>
    </Card>
  );
};
