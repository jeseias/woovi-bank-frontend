import { LoginForm } from "./login-form";

export const LoginPage = () => {
  return (
    <div className="grid grid-cols-[1fr_1fr] h-screen w-screen">
      <div className=""></div>
      <div className="h-full flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
};
