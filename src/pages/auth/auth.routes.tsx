import { Route } from "react-router-dom";
import { LoginPage } from "./login/login-page";
import { AppRoutePaths } from "@/constants";

export const authRoutes = () => (
  <Route path={AppRoutePaths.Auth.Index}>
    <Route path={AppRoutePaths.Auth.Login} element={<LoginPage />} />
  </Route>
);
