import { Navigation } from "./Navigation";
import { NavigationMenuItem } from "@/components/shadcn/ui/navigation-menu";
import { ModeToggle } from '@/components/mode-toggle'; 

export const MenuList = () => {
  const navigation = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Iniciar Sesion", path: "/auth/login" },
    { title: "Registrarse", path: "/auth/register" },
  ];



  return (
    <>
      {navigation.map(({ path, title }, index) => (
        <Navigation key={index} path={path} title={title} />
      ))}
      <NavigationMenuItem>
        <ModeToggle />
      </NavigationMenuItem>
    </>
  );
};
