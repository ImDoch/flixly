import { CustomImagesCarousel } from "@/media/components/CustomImagesCarousel";
import { CustomNavbar } from "@/media/components/CustomNavbar";

export const HomePage = () => {
  return (
    <div className="p-3 flex flex-col items-center justify-center gap-1.5">
      <CustomImagesCarousel />

      <CustomNavbar visible={true} />
    </div>
  );
};
