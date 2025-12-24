import { useState } from "react";
import { Link } from "react-router";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

interface Props {
  visible: boolean;
}

export const CustomNavbar = ({ visible }: Props) => {
  const [seletedItem, setSeletedItem] = useState<"movies" | "series">("movies");

  return (
    <div className={`p-2 ${visible ? "lg:hidden" : "hidden lg:block"}`}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "flex justify-center items-center w-32 py-2 rounded-md cursor-pointer",
                seletedItem === "movies" ? "bg-slate-800" : "bg-slate-950"
              )}
              onClick={() => setSeletedItem("movies")}
            >
              <Link to="/">Movies</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "flex justify-center items-center w-32 py-2 rounded-md cursor-pointer",
                seletedItem === "series" ? "bg-slate-800" : "bg-slate-950"
              )}
              onClick={() => setSeletedItem("series")}
            >
              <Link to="/">Series</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
