import { AppRoutePaths } from "@/constants";
import { Route } from "react-router-dom";
import { DashboardPage } from "./dashboard-page";
import { DashboardLayout } from "./layouts/dashboard-layout";

export const dashboardRoutes = () => (
  <Route path={AppRoutePaths.Dashboard.Index} element={<DashboardLayout />}>
    <Route path={AppRoutePaths.Dashboard.Index} element={<DashboardPage />} />
  </Route>
);
