import { Route, Routes } from "react-router-dom";
import { ProtectedRouter } from "./ProtectedRouter";
import { DashboardRoutes } from "@/dashboard/routes/DashboardRoutes";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { HomeRoutes } from "@/home/routes/HomeRoutes";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={ <HomeRoutes /> } />
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<ProtectedRouter />}>
        <Route path="dashboard/*" element={ <DashboardRoutes/>} />
      </Route>

    </Routes>
  );
};
