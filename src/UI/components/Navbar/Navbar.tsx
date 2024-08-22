

import { SheetNav } from './SheetNav';
import { MenuList } from './MenuList';
import { HeadNav } from './HeadNav';
import { NavigationMenu, NavigationMenuList } from '@/components/shadcn/ui/navigation-menu';

export const Navbar = () => {


  return (
    <header className=" w-full shadow py-2 border">
      <NavigationMenu className="container min-w-full justify-between">

        <HeadNav />
        
        <SheetNav />  {/* solo se muestra en sm */}

        <NavigationMenuList className="hidden sm:flex">
          <MenuList />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
