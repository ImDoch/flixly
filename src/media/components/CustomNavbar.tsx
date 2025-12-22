import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link } from "react-router";

interface Props {
  visible: boolean;
}

export const CustomNavbar = ({ visible }: Props) => {
  const [seletedItem, setSeletedItem] = useState<"movies" | "series">("movies");

  return (
    <div
      className={`p-2 mt-2 rounded-md bg-slate-900 ${
        visible ? "lg:hidden" : "hidden lg:block"
      }`}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                seletedItem === "movies" ? "bg-slate-800" : "bg-slate-950"
              )}
              onClick={() => setSeletedItem("movies")}
            >
              <Link to="/">Movies</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                seletedItem === "series" ? "bg-slate-800" : "bg-slate-950"
              )}
              onClick={() => setSeletedItem("series")}
            >
              <Link to="/">Series</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
