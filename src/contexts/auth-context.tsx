import { AppRoutePaths } from "@/constants";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  isLogged: boolean;
}

const AuthContext = createContext<IAuthContext>({
  isLogged: false,
} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigateTo(AppRoutePaths.Auth.Login);
    }
  }, [isLogged]);

  return (
    <AuthContext.Provider value={{ isLogged: false }}>
      {children}
    </AuthContext.Provider>
  );
};
