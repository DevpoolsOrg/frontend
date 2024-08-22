
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/shadcn/ui/sheet';
import { NavigationMenu, NavigationMenuList } from '@/components/shadcn/ui/navigation-menu';
import { HeadNav } from './HeadNav';
import { MenuList } from './MenuList';

export const SheetNav = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mb-8">
            <SheetTitle>
              <HeadNav />
            </SheetTitle>
          </SheetHeader>
          <NavigationMenu>
            <NavigationMenuList className='flex flex-col-reverse gap-3'>
                <MenuList />
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};
