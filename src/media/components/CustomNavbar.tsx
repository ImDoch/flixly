import { Link, useSearchParams } from 'react-router';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { NavigationMenuLink } from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';

interface Props {
  visible: boolean;
}

export const CustomNavbar = ({ visible }: Props) => {
  const [searchParams] = useSearchParams();

  const mediaType = searchParams.get('type') ?? 'movies';

  return (
    <div className={`p-2 ${visible ? 'lg:hidden' : 'hidden lg:block'}`}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                'flex justify-center items-center w-32 py-2 rounded-md cursor-pointer',
                mediaType === 'movies' ? 'bg-slate-800' : 'bg-slate-950'
              )}
              asChild
            >
              <Link to="/?type=movies">Movies</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                'flex justify-center items-center w-32 py-2 rounded-md cursor-pointer',
                mediaType === 'series' ? 'bg-slate-800' : 'bg-slate-950'
              )}
              asChild
            >
              <Link to="/?type=series">Series</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
