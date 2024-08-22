
import { useAuthStore } from "@/auth/store/authStore";
import { ValidRoles } from "@/users-management";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedAdminRouter = () => {

  const user = useAuthStore((state) => state.user);

  return user?.roles.includes(ValidRoles.ADMIN || ValidRoles.SUPERADMIN) ? <Outlet /> : <Navigate to="/forum" />;  ;
};
