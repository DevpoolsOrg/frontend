
import { useAuthStore } from "@/auth/store/authStore";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRouter = () => {

  const user = useAuthStore((state) => state.user);

  return user?.isActive ? <Outlet /> : <Navigate to="/auth/login" />;
};
