import { IUser } from "@/@types/app.types";
import { AppRoutePaths } from "@/constants";
import { StorageKeys } from "@/constants/app-keys";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { PropsWithChildren, createContext, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  isLogged: boolean;
  signOut: () => void;
  authenticateUser: (user: IUser, token: string) => void;
}

const AuthContext = createContext<IAuthContext>({
  isLogged: false,
} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigateTo = useNavigate();
  const [user, setUser] = useLocalStorage<IUser | null>(StorageKeys.User);
  const [token, setToken] = useLocalStorage<string>(StorageKeys.Token);

  const signOut = () => {
    setUser(null);
    setToken("");
    navigateTo("/login");
  };

  const authenticateUser = (user: IUser, token: string) => {
    setUser(user);
    setToken(token);
  };

  const isLogged = useMemo(() => {
    return !!user?.id && !!token;
  }, [user, token]);

  useEffect(() => {
    if (isLogged) {
      navigateTo(AppRoutePaths.Dashboard.Index);
      return;
    }

    navigateTo(AppRoutePaths.Auth.Login);
  }, [isLogged, navigateTo]);

  return (
    <AuthContext.Provider value={{ isLogged, signOut, authenticateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}