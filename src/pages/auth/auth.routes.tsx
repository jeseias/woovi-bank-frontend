import { Route } from "react-router-dom";
import { LoginPage } from "./login/login-page";
import { AppRoutePaths } from "@/constants";
import { SignUpPage } from "./sign-up";
import { AuthLayout } from "./layouts/auth-layout";

export const authRoutes = () => (
  <Route path={AppRoutePaths.Auth.Index} element={<AuthLayout />}>
    <Route path={AppRoutePaths.Auth.Login} element={<LoginPage />} />
    <Route path={AppRoutePaths.Auth.SignUp} element={<SignUpPage />} />
  </Route>
);
