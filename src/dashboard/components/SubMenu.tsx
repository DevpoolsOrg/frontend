import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/shadcn/ui/menubar";
import { Link } from "react-router-dom";

export const SubMenu = () => {
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
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Discusiones</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Settings</MenubarItem>
            <MenubarItem>Exit</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

      </Menubar>
  );
};
