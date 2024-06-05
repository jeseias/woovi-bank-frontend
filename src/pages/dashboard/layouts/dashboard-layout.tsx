import { Outlet } from "react-router-dom";
import { NAV_ITEMS } from "./dashboard.data";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardLayout = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-[300px_1fr] grid-rows-[60px_1fr] overflow-hidden">
      <aside className="border-r p-5 row-start-1 row-end-3 flex flex-col">
        <div className="pb-4 border-b">
          <p className="">Woovi Bank</p>
        </div>
        <div className="mt-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <div className="flex items-center rounded-md p-2 bg-muted border cursor-pointer duration-150 hover:bg-slate-50">
              <item.icon />
              <p className="ml-2 text-muted-foreground">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto">
          <Button className="flex items-center rounded-md p-3  px-4 w-full">
            <LogOut color="#fff" />
            <p className="ml-2 ">Logout</p>
          </Button>
        </div>
      </aside>
      <header className="col-start-2">
        <div className="container flex items-center justify-between">
          <h2 className="">Dashboard</h2>
          <div className="">
            <p className="font-bold">Jeseias Domingos</p>
          </div>
        </div>
      </header>
      <main className="col-start-2">
        <Outlet />
      </main>
    </div>
  );
};
