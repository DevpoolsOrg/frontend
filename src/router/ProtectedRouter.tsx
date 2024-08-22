
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRouter = () => {
  const user={
    token:true
  }

  return user.token ? <Outlet /> : <Navigate to="/auth/login" />;
};
