import { Input } from "@/components/shadcn/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/shadcn/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/shadcn/ui/navigation-menu";
import { Link } from "react-router-dom";

export const ForumNav = () => {
  return (
    <NavigationMenu className="w-full mx-auto my-2">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Publicaciones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             <Link to="/forum">Ver todas</Link>
            </NavigationMenuLink>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             <Link to="/forum/create">Crear post</Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Ver todas
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Input placeholder="Buscar articulos"/> {/*manejar la busqueda con onchange*/}
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
};
