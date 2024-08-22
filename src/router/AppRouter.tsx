import { Route, Routes } from "react-router-dom";
import { ProtectedRouter } from "./ProtectedRouter";
import { DashboardRoutes } from "@/dashboard/routes/DashboardRoutes";
import { AuthRoutes } from "@/auth/routes/AuthRoutes";
import { HomeRoutes } from "@/home/routes/HomeRoutes";
import { NotFoundPage } from "@/UI/pages/NotFoundPage";
import { ForumRoutes } from "@/forum/routes/ForumRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomeRoutes />} />
      <Route path="auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<ProtectedRouter />}>
        <Route path="dashboard/*" element={<DashboardRoutes />} />
        <Route path="forum/*" element={<ForumRoutes />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
