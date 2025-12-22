import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";
import { CustomNavbar } from "./CustomNavbar";

export const CustomHeader = () => {
  return (
    <header className="h-16 px-2 py-1 m-auto flex justify-between items-center border-b border-red-400">
      <h1 className="text-2xl text-red-500">FlixLy</h1>

      <CustomNavbar visible={false} />

      <div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-red-400"
        >
          <Search className="text-red-500" />
        </Button>
      </div>
    </header>
  );
};
