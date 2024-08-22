import { useAuthStore } from "@/auth/store/authStore";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/shadcn/ui/menubar";
import { ValidRoles } from "@/users-management";
import { Link } from "react-router-dom";

export const SubMenu = () => {

  const user = useAuthStore((state) => state.user);

  return (
      <Menubar className="mx-auto mt-2">
        <MenubarMenu>
          <MenubarTrigger>Ministerio de educación</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link className="w-full h-full" to="/dashboard/chart">Graficos</Link>
            </MenubarItem>
            <MenubarItem>Propuestas</MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Discusiones</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Ver todas</MenubarItem>
            <MenubarItem>Crear un post</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        {
          user?.roles.includes(ValidRoles.ADMIN || ValidRoles.SUPERADMIN) && (
            <MenubarMenu>
              <MenubarTrigger>Administración</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Link className="w-full h-full" to="/dashboard/users">Usuarios</Link>
                </MenubarItem>

              </MenubarContent>
            </MenubarMenu>
        )}

      </Menubar>
  );
};
