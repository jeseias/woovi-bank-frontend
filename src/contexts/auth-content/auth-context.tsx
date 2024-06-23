import { IUser } from "@/@types/app.types";
import { AppRoutePaths } from "@/constants";
import { StorageKeys } from "@/constants/app-keys";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { PropsWithChildren, createContext, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface IAuthContext {
  isLogged: boolean;
  signOut: () => void;
  authenticateUser: (user: IUser, token: string) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLogged: false,
} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigateTo = useNavigate();
  const { pathname } = useLocation();
  const [user, setUser] = useLocalStorage<IUser | null>(StorageKeys.User);
  const [token, setToken] = useLocalStorage<string>(StorageKeys.Token);

  const signOut = () => {
    setUser(null);
    setToken("");
    navigateTo(AppRoutePaths.Auth.Login);
  };

  const authenticateUser = (user: IUser, token: string) => {
    setUser(user);
    setToken(token);
     navigateTo(AppRoutePaths.Dashboard.Index);
  };

  const isLogged = useMemo(() => {
    return !!user?.id && !!token;
  }, [user, token]);

  useEffect(() => {
    if (isLogged && pathname.startsWith(AppRoutePaths.Auth.Index)) {
      navigateTo(AppRoutePaths.Dashboard.Index);
    } else if (!isLogged && !pathname.startsWith(AppRoutePaths.Auth.Index)) {
      navigateTo(AppRoutePaths.Auth.Login);
    }
  }, [isLogged, navigateTo, pathname]);

  return (
    <AuthContext.Provider value={{ isLogged, signOut, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};