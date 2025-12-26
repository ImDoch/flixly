import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";
import { CustomNavbar } from "./CustomNavbar";
import { useNavigate } from "react-router";

export const CustomHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 px-2 py-1 m-auto flex justify-between items-center border-b border-muted">
      <h1 className="text-2xl font-bold text-red-500">FlixLy</h1>

      <CustomNavbar visible={false} />

      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => navigate("search")}
      >
        <Search className="text-red-500" />
      </Button>
    </header>
  );
};
