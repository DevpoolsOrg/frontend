import { Navigation } from "./Navigation";
import { NavigationMenuItem } from "@/components/shadcn/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { useNavigate } from "react-router-dom";
import { AuthNav } from "./AuthNav";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";
import { UserMenu } from "./UserMenu";
import UserImage from "@/assets/userimage.png";
import { useAuthStore } from "@/auth/store/authStore";


export const MenuList = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();


  const navigation = [
      { title: 'Inicio', path: '/foro' },
    ];

    user?.roles.includes('admin') && navigation.push({ title: 'Dasboard', path: '/dashboard' });


    const handleLogout = async() => {
      await logout();
      navigate('/');
    };



return (
  <>
      {navigation.map(({ path, title }, index) => (
        <Navigation key={index} path={path} title={title} />
      ))}
      <NavigationMenuItem>
        <ModeToggle />
      </NavigationMenuItem>
      {!user?.isActive ? (
        <NavigationMenuItem>
          <AuthNav />
        </NavigationMenuItem>
      ) : (
        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src={user.avatar ? user.avatar : UserImage} />
                <AvatarFallback>{user.name.slice(1)}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <UserMenu handleLogout={handleLogout} firstName={user.name} />
          </DropdownMenu>
        </NavigationMenuItem>
      )}
    </>
  );
};