import type { MediaBase } from "../types/mediaBase.interface";
import { MediaCard } from "./MediaCard";

interface Props {
  media: MediaBase[];
}

export const MediaGrid = ({ media }: Props) => {
  return (
    <div className="grid gap-6 my-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,180px)] justify-center">
      {media.map((item) => (
        <MediaCard key={item.id} media={item} />
      ))}
    </div>
  );
};
