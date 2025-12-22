import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

interface Props {
  visible: boolean;
}

export const CustomNavbar = ({ visible }: Props) => {
  return (
    <div
      className={`p-2 mt-2 rounded-md bg-slate-900 ${
        visible ? "lg:hidden" : "hidden lg:block"
      }`}
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link to="/">Movies</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <Link to="/">Series</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
