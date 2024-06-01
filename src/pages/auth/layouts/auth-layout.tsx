import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-[1fr_1fr]">
      <div className="bg-red-200"></div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};
